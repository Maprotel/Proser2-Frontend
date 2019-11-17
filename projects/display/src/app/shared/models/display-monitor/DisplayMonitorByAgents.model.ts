export class DisplayMonitorByAgentsModel {
  queueName: string;
  activeCalls: number;
  agentsLogin: number;
  agentsAvailable: number;
  agentsBusy: number;
  agentsBreak: number;
  agentsAssignation: number;

  constructor() {
  this.queueName = '';
  this.activeCalls = 0;
  this.agentsLogin = 0;
  this.agentsAvailable = 0;
  this.agentsBusy = 0;
  this.agentsBreak = 0;
  this.agentsAssignation = 0;
  }

  public fieldList() {
    return [
      { field_name: "queueName", name: "nombre_cola", text: "Nombre cola" },
      { field_name: "activeCalls", name: "llamadas_activas", text: "Llamadas activas" },
      { field_name: "agentsLogin", name: "agentes_conectados", text: "Agentes conectados" },
      { field_name: "agentsAvailable", name: "agentes_disponibles", text: "Agentes disponibles" },
      { field_name: "agentsBusy", name: "agentes_ocupados", text: "Agentes ocupados" },
      { field_name: "agentsBreak", name: "agentes_auxiliar", text: "Agentes en auxiliar" },
      { field_name: "agentsAssignation", name: "agentes_asignacion", text: "Agentes en asignación" },
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}
