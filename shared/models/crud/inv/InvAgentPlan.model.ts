import { PeopleJsonModel } from "../general/People.model";
import { OperationJsonModel } from "../general/Operation.model";
import { TimeJsonModel } from "../general/Time.model";

export class InvAgentPlanModel {
  agent_plan_id: number;
  agent_plan_agent_name: any;
  agent_plan_agent_id: any;
  agent_plan_date: any;
  agent_plan_start_time: any;
  agent_plan_end_time: any;
  agent_plan_agent_type: any;
  

  constructor() {
    this.agent_plan_id = 0;
    this.agent_plan_agent_name = null;
    this.agent_plan_agent_id = null;
    this.agent_plan_date = null;
    this.agent_plan_start_time = null;
    this.agent_plan_end_time = null;
    this.agent_plan_agent_type = null;
    
  }

  public fieldList() {
    return [
      { field_name: "agent_plan_id", name: "id", text: "Id" },
      { field_name: "agent_plan_agent_name", name: "nombre_agente", text: "Nombre agente" },
      { field_name: "agent_plan_agent_id", name: "id_agente", text: "Id Agente" },
      {
        field_name: "agent_plan_date",
        name: "fecha",
        text: "Fecha"
      },
      {
        field_name: "agent_plan_start_time",
        name: "hora_inicio",
        text: "Hora inicio"
      },
      {
        field_name: "agent_plan_end_time",
        name: "hora_final",
        text: "Hora final"
      },
      { field_name: "agent_plan_agent_type", name: "condicion", text: "Condición" }
      
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }
}
