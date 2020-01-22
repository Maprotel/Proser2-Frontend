export class OperationConsolidateOperationModel {
  agent_id: number;
  agent_name: string;
  base_date: string;
  min_date: string;
  max_date: string;
  login_duration_sec: string;
  login_duration_time: string;
  inbound_calls_attended: string;
  inbound_attended_duration_sec: string;
  inbound_attended_duration_time: string;
  inbound_percent: string;
  outbound_calls_made: string;
  outbound_made_sec: string;
  outbound_made_time: string;
  outbound_percent: string;
  outbound_internal_made: string;
  outbound_internal_sec: string;
  outbound_internal_time: string;
  internal_percent: string;
  hung_by_agent: string;
  auxiliar_duration_sec: string;
  auxiliar_duration_time: string;
  auxiliar_percent: string;
  assignation_duration_sec: string;
  assignation_duration_time: string;
  assignation_percent: string;
  available_duration_sec: string;
  available_duration_time: string;
  available_percent: string;

  constructor() {
    this.agent_id = 0;
    this.agent_name = "";
    this.base_date = "";
    this.min_date = "";
    this.max_date = "";
    this.login_duration_sec = "";
    this.login_duration_time = "";
    this.inbound_calls_attended = "";
    this.inbound_attended_duration_sec = "";
    this.inbound_attended_duration_time = "";
    this.inbound_percent = "";
    this.outbound_calls_made = "";
    this.outbound_made_sec = "";
    this.outbound_made_time = "";
    this.outbound_percent = "";
    this.outbound_internal_made = "";
    this.outbound_internal_sec = "";
    this.outbound_internal_time = "";
    this.internal_percent = "";
    this.hung_by_agent = "";
    this.auxiliar_duration_sec = "";
    this.auxiliar_duration_time = "";
    this.auxiliar_percent = "";
    this.assignation_duration_sec = "";
    this.assignation_duration_time = "";
    this.assignation_percent = "";
    this.available_duration_sec = "";
    this.available_duration_time = "";
    this.available_percent = "";
  }

  public fieldList() {
    return [
      {
        field_name: "agent_id",
        name: "id_agente",
        text: "Id agente",
        html: `<p>Id<br>agente</p>`
      },
      {
        field_name: "agent_name",
        name: "nombre_agente",
        text: "Nombre agente"
      },
      {
        field_name: "base_date",
        name: "fecha",
        text: "Fecha"
      },
      {
        field_name: "min_date",
        name: "fecha_inicio",
        text: "Fecha inicio"
      },
      {
        field_name: "max_date",
        name: "fecha_fin",
        text: "Fecha fin"
      },
      {
        field_name: "login_duration_sec",
        name: "loging_seg",
        text: "Login seg.",
        html: `<p>Duración seg <br> login</p>`
      },
      {
        field_name: "login_duration_time",
        name: "login_tiempo",
        text: "Login tiempo",
        html: `<p>Duración hms <br> login</p>`
      },
      {
        field_name: "inbound_calls_attended",
        name: "llamadas_atendidas",
        text: `LLamadas atendidas`,
        html: `<p>LLamadas <br> atendidas</p>`
      },
      {
        field_name: "inbound_attended_duration_sec",
        name: "llamadas_atendidas_seg",
        text: "Llamadas atendidas seg",
        html: `<p>Duración seg <br> llamadas <br> atendidas</p>`
      },

      {
        field_name: "inbound_attended_duration_time",
        name: "tiempo_llamadas_atendidas",
        text: "Tiempo llamadas atendidas",
        html: `<p>Duración hms <br> llamadas <br> atendidas</p>`
      },

      {
        field_name: "inbound_percent",
        name: "llamadas_atendidas_promedio",
        text: "LLamadas atendidas promedio",
        html: `<p>Porcentaje <br> duración <br> atendidas</p>`
      },
      {
        field_name: "outbound_calls_made",
        name: "llamadas_realizadas",
        text: "Llamadas realizadas",
        html: `<p>Llamadas <br> realizadas</p>`
      },

      {
        field_name: "outbound_made_sec",
        name: "llamadas_realizadas_seg",
        text: "Llamadas realizadas seg.",
        html: `<p>Duración seg <br> llamadas <br> realizadas</p>`
      },

      {
        field_name: "outbound_made_time",
        name: "llamadas_realizadas_tiempo",
        text: "LLamadas realizadas tiempo",
        html: `<p>Duración hms <br> llamadas <br> realizadas</p>`
      },

      {
        field_name: "outbound_percent",
        name: "llamadas_realizadas_promedio",
        text: "LLamadas realizadas promedio",
        html: `<p>Porcentaje <br> duración <br> realizadas</p>`
      },
      {
        field_name: "outbound_internal_made",
        name: "llamadas_internas",
        text: "LLamadas internas",
        html: `<p>Llamadas <br> internas</p>`
      },
      {
        field_name: "outbound_internal_sec",
        name: "llamadas_internas_seg",
        text: "Llamadas internas seg.",
        html: `<p>Duración seg <br> llamadas <br> internas</p>`
      },

      {
        field_name: "outbound_internal_time",
        name: "llamadas_internas_tiempo",
        text: "LLamadas internas tiempo",
        html: `<p>Duración hms <br> llamadas <br> internas</p>`
      },

      {
        field_name: "internal_percent",
        name: "llamadas_internas_promedio",
        text: "LLamadas internas promedio",
        html: `<p>Porcentaje <br> duración <br> internas</p>`
      },
      {
        field_name: "auxiliar_duration_sec",
        name: "auxiliar_seg",
        text: "Auxiliar seg.",
        html: `<p>Duración seg <br> auxiliares</p>`
      },

      {
        field_name: "auxiliar_duration_time",
        name: "auxiliar_tiempo",
        text: "Auxiliar tiempo",
        html: `<p>Duración hms <br> auxiliares</p>`
      },
      {
        field_name: "auxiliar_percent",
        name: "auxiliar_porcentaje",
        text: "Auxiliar porcentaje",
        html: `<p>Porcentaje <br> auxiliares</p>`
      },

      {
        field_name: "assignation_duration_sec",
        name: "asignacion_seg",
        text: "Asignación seg.",
        html: `<p>Duración seg <br> asignaciones</p>`
      },

      {
        field_name: "assignation_duration_time",
        name: "asignacion_tiempo",
        text: "Asignación tiempo",
        html: `<p>Duración hms <br> asignaciones</p>`
      },

      {
        field_name: "assignation_percent",
        name: "asignacion_porcentaje",
        text: "Asignación porcentaje",
        html: `<p>Porcentaje <br> asignaciones</p>`
      },

      {
        field_name: "available_duration_sec",
        name: "segundos_disponible",
        text: "Segundos disponible",
        html: `<p>Duración seg <br> disponible</p>`
      },

      {
        field_name: "available_duration_time",
        name: "tiempo_disponible",
        text: "Tiempo disponible",
        html: `<p>Duración hms <br> disponible</p>`
      },

      {
        field_name: "available_percent",
        name: "porcentaje_disponible",
        text: "Porcentaje disponible",
        html: `<p>Porcentaje <br> disponible</p>`
      },
      {
        field_name: "hung_by_agent",
        name: "llamadas_colgadas",
        text: "Llamadas colgadas",
        html: `<p>Llamadas <br> colgadas</p>`
      }
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}