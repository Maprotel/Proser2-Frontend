export class DisplayMonitorByCallsModel {
  date_now: string;
  date_time: string;
  queueName: string;
  queueNumber: number;
  maxWaitTime: number;
  maxWaitTimeAnswer: number;
  maxWaitTimeAbandon: number;
  inboundReceived: number;
  inboundAttended: number;
  inboundAbandoned: number;
  inboundBeforeTime: number;
  inboundBeforeMinute: number;
  inboundShort: number;
  inboundServiceLevel: number;
  inboundServiceLevelLastHourBeforeTime: number;
  inboundServiceLevelMinute: number;
  inboundServiceLevelLastHourBeforeMinute: number;
  inboundAttentionLevel: number;
  inboundAbandonLevel: number;

  constructor() {
  this.date_now = '';
  this.date_time = '';
  this.queueName = '';
  this.queueNumber = 0;
  this.maxWaitTime = 0;
  this.maxWaitTimeAnswer = 0;
  this.maxWaitTimeAbandon = 0;
  this.inboundReceived = 0;
  this.inboundAttended = 0;
  this.inboundAbandoned = 0;
  this.inboundBeforeTime = 0;
  this.inboundBeforeMinute = 0;
  this.inboundShort = 0;
  this.inboundServiceLevel = 0;
  this.inboundServiceLevelLastHourBeforeTime = 0;
  this.inboundServiceLevelMinute = 0;
  this.inboundServiceLevelLastHourBeforeMinute = 0;
  this.inboundAttentionLevel = 0;
  this.inboundAbandonLevel = 0;
  }

  public fieldList() {
    return [
      { field_name: "date_now", name: "fecha_actual", text: "Fecha actual" },
      { field_name: "date_time", name: "tiempo_actual", text: "Tiempo actual" },
      { field_name: "queueName", name: "nombre_cola", text: "Nombre cola" },
      { field_name: "queueNumber", name: "numero_cola", text: "Número cola" },
      { field_name: "maxWaitTime", name: "t_max_actual_espera", text: "T. Máx. Actual espera" },
      { field_name: "maxWaitTimeAnswer", name: "t_max_actual_contestar", text: "T. Máx. Actual contestar (sg)" },
      { field_name: "maxWaitTimeAbandon", name: "t_max_actual_abandono", text: "T. Máx. Actual abandono (sg)" },
      { field_name: "inboundReceived", name: "llamadas_recibidas", text: "Llamadas recibidas" },
      { field_name: "inboundAttended", name: "llamadas_atendidas", text: "Llamadas atendidas" },
      { field_name: "inboundAbandoned", name: "llamadas_abandonadas", text: "Llamadas abandonadas" },
      { field_name: "inboundBeforeTime", name: "atendidas_antes_20", text: "Atendidas antes de 20 sg" },
      { field_name: "inboundBeforeMinute", name: "atendidas_antes_60", text: "Atendidas antes de 60 sg" },
      { field_name: "inboundShort", name: "llamadas_cortas", text: "Llamadas cortas" },
      { field_name: "inboundServiceLevel", name: "nivel_servicio_20", text: "Niv. Serv. 20sg" },
      { field_name: "inboundServiceLevelLastHourBeforeTime", name: "niv_serv_20_ult_60_min.", text: "Niv. Serv. 20sg Ult. 60 Min." },
      { field_name: "inboundServiceLevelMinute", name: "nivel_servicio_60", text: "Niv. Serv. 60sg" },
      { field_name: "inboundServiceLevelLastHourBeforeMinute", name: "niv_serv_60_ult_60_min", text: "Niv. Serv. 60sg Ult. 60 Min." },
      { field_name: "inboundAttentionLevel", name: "nivel_atencion", text: "Niv. atención" },
      { field_name: "inboundAbandonLevel", name: "nivel_abandono", text: "Niv. abandono" },
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}
