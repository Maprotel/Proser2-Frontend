El sistema para generar el plan cuenta con
Una base de datos independiente
Contiene tablas para
- Calendario
- Horarios del personal
- WEEKDAY(inv_calendarday_date) + 1 

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_weekday` `inv_calendarday_weekday` INT(10) AS ((WEEKDAY(inv_calendarday_date) + 1 )) PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_monthday` `inv_calendarday_monthday` INT(10) AS (DAYOFMONTH(inv_calendarday_date) + 0) PERSISTENT;


ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_month` `inv_calendarday_month` INT(10) AS (MONTH(inv_calendarday_date) + 0) PERSISTENT;


ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_week` `inv_calendarday_week` INT(10) AS (WEEKOFYEAR(inv_calendarday_date) + 0) PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_workingday` `inv_calendarday_workingday` INT(10) AS (IF(LENGTH(inv_calendarday_hollyday) > 0, 1, 0)) PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_ref` `inv_calendarday_ref` varchar(50) AS (CONCAT(	inv_calendarday_calendarid, '-', 	inv_calendarday_date )) PERSISTENT;


ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_monthday_id` `inv_calendarday_monthday_id` varchar(5) AS (CONCAT(	lpad(inv_calendarday_month, 2, 0), '-', 	lpad(inv_calendarday_monthday,2, 0) )) PERSISTENT;


ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_starttime` `inv_calendarday_starttime` varchar(50) AS ( CONCAT(	inv_calendarday_date, ' ', 	inv_calendarday_start ))  PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_endtime` `inv_calendarday_endtime` varchar(50) AS (
  
  IF( inv_calendarday_start <= inv_calendarday_end, CONCAT(	inv_calendarday_date, ' ', 	inv_calendarday_end ) , CONCAT(	ADDDATE(inv_calendarday_date, 1), ' ', 	inv_calendarday_end ))
  
  ) PERSISTENT;


  ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_year` `inv_calendarday_year` varchar(100) AS ((YEAR(inv_calendarday_date))) PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_yearmonth` `inv_calendarday_yearmonth` varchar(100) AS ( CONCAT(	YEAR(inv_calendarday_date), '-', lpad(MONTH(inv_calendarday_date), 2, 0) ))  PERSISTENT;





ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_workingminutes` `inv_calendarday_workingminutes` INT(10) AS (TIMESTAMPDIFF(MINUTE,inv_calendarday_starttime,inv_calendarday_endtime) - (inv_calendarday_breaktimeminutes) ) PERSISTENT;

ALTER TABLE `InvCalendarDay` CHANGE `inv_calendarday_workingminutes` `inv_calendarday_workingminutes` INT(10) AS (MINUTE(inv_calendarday_breaktime) ) PERSISTENT;