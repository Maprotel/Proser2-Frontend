export class CallsIndicatorsByIntervalModel {
  day_name: string;
  week_day: string;

  interval_init: string;
  interval_finish: string;

  interval_start: string;
  interval_end: string;

  start_date: string;
  start_time: string;
  end_time: string;
  inboundReceived: string;
  inboundAttended: string;
  inboundBeforeTime: string;
  inboundBeforeMinute: string;
  inboundServiceLevel: string;
  inboundServiceLevelMinute: string;
  inboundAttentionLevel: string;
  inboundTmo: string;
  avgWaitTimeAnswer: string;
  avgWaitTimeAbandon: string;
  maxWaitTimeAnswer: string;
  maxWaitTimeAbandon: string;
  inboundAbandoned: string;
  inboundAbandonLevel: string;

  constructor() {
    this.day_name = ""; 
    this.week_day = ""; 
    this.interval_start = "";
    this.interval_end = "";
    this.start_date = "";
    this.start_time = "";
    this.end_time = "";
    this.inboundReceived = "";
    this.inboundAttended = "";
    this.inboundBeforeTime = "";
    this.inboundBeforeMinute = "";
    this.inboundServiceLevel = "";
    this.inboundServiceLevelMinute = "";
    this.inboundAttentionLevel = "";
    this.inboundTmo = "";
    this.avgWaitTimeAnswer = "";
    this.avgWaitTimeAbandon = "";
    this.maxWaitTimeAnswer = "";
    this.maxWaitTimeAbandon = "";
    this.inboundAbandoned = "";
    this.inboundAbandonLevel = "";
  }

  public fieldList() {
    return [
      { field_name: "day_name", name: "nombre_dia", text: "Día" },
      { field_name: "week_day", name: "dia_semana", text: "Dia num" },
      {
        field_name: "interval_init",
        name: "intervalo_inicial_num",
        text: "Inicio"
      },
      {
        field_name: "interval_finish",
        name: "intervalo_final_num",
        text: "Fin"
      },
      {
        field_name: "interval_start",
        name: "interval_start",
        text: "Intervalo inicial"
      },
      {
        field_name: "interval_end",
        name: "interval_end",
        text: "Intervalo final"
      },
      { field_name: "start_date", name: "fecha_inicio", text: "Fecha" },
      { field_name: "start_time", name: "hora_inicio", text: "Hora inicio" },
      { field_name: "end_time", name: "hora_fin", text: "Hora final" },
      {
        field_name: "inboundReceived",
        name: "llamadas_recibidas",
        text: "Recibidas"
      },
      {
        field_name: "inboundAttended",
        name: "llamadas_atendidas",
        text: "Atendidas"
      },
      {
        field_name: "inboundBeforeTime",
        name: "llamadas_atendidas_antes_de_20s",
        text: "Atendidas antes",
        html: `Atendidas<br> antes de 20s`
      },
      {
        field_name: "inboundBeforeMinute",
        name: "llamadas_atendidas_antes_de_60s",
        text: "Atendidas antes",
        html: `Atendidas <br> antes de 60s`
      },
      {
        field_name: "inboundServiceLevel",
        name: "nivel_servicio_20s",
        text: "Nivel servicio 20s"
      },
      {
        field_name: "inboundServiceLevelMinute",
        name: "nivel_servicio_60s",
        text: "Nivel servicio 60s"
      },
      {
        field_name: "inboundAttentionLevel",
        name: "nivel_atencion",
        text: "Nivel<br> atención"
      },
      {
        field_name: "inboundTmo",
        name: "tmo_entrante",
        text: "TMO"
      },
      {
        field_name: "avgWaitTimeAnswer",
        name: "t_prom_espera_contest",
        text: `Tiempo<br>Prom. Espera<br>Contest.`
      },
      {
        field_name: "avgWaitTimeAbandon",
        name: "t_prom_espera_abandon",
        text: `Tiempo<br>Prom. Espera<br>Abandon.`
      },
      {
        field_name: "maxWaitTimeAnswer",
        name: "t_max_espera_contest",
        text: `Tiempo<br>Max. Espera<br>Contest.`
      },
      {
        field_name: "maxWaitTimeAbandon",
        name: "t_max_espera_abandon",
        text: `Tiempo<br>Max. Espera<br>Abandon.`
      },
      {
        field_name: "inboundAbandoned",
        name: "llamadas_abandonadas",
        text: "Abandonadas"
      },
      {
        field_name: "inboundAbandonLevel",
        name: "nivel_abandono",
        text: "Nivel abandono"
      },
      {
        field_name: "operation_seconds",
        name: "seg_operacion",
        text: "Seg operacion"
      },
      
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}
