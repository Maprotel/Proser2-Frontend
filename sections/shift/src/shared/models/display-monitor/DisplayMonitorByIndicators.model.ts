export class DisplayMonitorByIndicatorsModel {
  queueName: string;
  day_name: string;
  week_day: string;
  start_date: string;
  start_time: string;
  end_time: string;
  idealResponseTime: number;
  inboundReceived: number;
  inboundAbandoned: number;
  inboundAttended: number;
  inboundShort: number;
  inboundBeforeTime: number;
  inboundAfterTime: number;
  inboundHungAgent: number;
  inboundServiceLevel: number;
  inboundAttentionLevel: number;
  inboundAbandonLevel: number;
  operation_seconds: number;
  operation_time: number;
  wait_seconds: number;
  wait_time: number;
  inboundTmo: number;
  inboundAsa: number;

  constructor() {
    this.queueName =  '';
    this.day_name =  '';
    this.week_day =  '';
    this.start_date =  '';
    this.start_time =  '';
    this.end_time =  '';
    this.idealResponseTime =  0;
    this.inboundReceived =  0;
    this.inboundAbandoned =  0;
    this.inboundAttended =  0;
    this.inboundShort =  0;
    this.inboundBeforeTime =  0;
    this.inboundAfterTime =  0;
    this.inboundHungAgent =  0;
    this.inboundServiceLevel =  0;
    this.inboundAttentionLevel =  0;
    this.inboundAbandonLevel =  0;
    this.operation_seconds =  0;
    this.operation_time =  0;
    this.wait_seconds =  0;
    this.wait_time =  0;
    this.inboundTmo =  0;
    this.inboundAsa =  0;
  }

  public fieldList() {
    return [
      { field_name: "queueName", name: "nombre_cola", text: "Nombre cola" },
      { field_name: "day_name", name: "nombre_dia", text: "Día" },
      { field_name: "week_day", name: "numero_dia", text: "Número día" },
      { field_name: "start_date", name: "fecha_inicio", text: "Fecha inicio" },
      { field_name: "start_time", name: "hora_inicio", text: "Hora inicio" },
      { field_name: "end_time", name: "fecha_final", text: "Fecha final" },
      { field_name: "idealResponseTime", name: "tiempo_ideal_respuesta", text: "Tiempo ideal de respuesta" },
      { field_name: "inboundReceived", name: "llamadas_recibidas", text: "Llamadas recibidas" },
      { field_name: "inboundAbandoned", name: "llamadas_abandonadas", text: "Llamadas abandonadas" },
      { field_name: "inboundAttended", name: "llamadas_atendidas", text: "Llamadas atendidas" },
      { field_name: "inboundShort", name: "llamadas_cortas", text: "Llamadas cortas" },
      { field_name: "inboundBeforeTime", name: "atendidas_antes_tiempo_ideal", text: "Atend. antes del tiempo ideal" },
      { field_name: "inboundAfterTime", name: "atendidas_despues_tiempo_ideal", text: "Atend. despues del tiempo ideal" },
      { field_name: "inboundHungAgent", name: "colgadas_agente", text: "Colgadas por agente" },
      { field_name: "inboundServiceLevel", name: "nivel_servicio", text: "Niv. servicio" },
      { field_name: "inboundAttentionLevel", name: "nivel_atencion", text: "Niv. atención" },
      { field_name: "inboundAbandonLevel", name: "nivel_abandono", text: "Niv. abandono" },
      { field_name: "operation_seconds", name: "segundos_operacion", text: "Segundos operación" },
      { field_name: "operation_time", name: "tiempo_operacion", text: "Tiempo operación" },
      { field_name: "wait_seconds", name: "segundos_espera", text: "Segundos espera" },
      { field_name: "wait_time", name: "tiempo_espera", text: "Tiempo espera" },
      { field_name: "inboundTmo", name: "tmo", text: "TMO" },
      { field_name: "inboundAsa", name: "asa", text: "ASA" },
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}
