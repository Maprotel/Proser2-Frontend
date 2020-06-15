import { UserSelectionModel } from "../system/UserSelection.model";

export class ProShowDisplayModel {
  pro_show_display_id: number;
  pro_show_display_name: string;
  pro_show_display_weekday: any;
  pro_show_display_start_time: any;
  pro_show_display_end_time: any;
  pro_show_display_type: any;
  pro_show_display_selection: any;
  pro_show_display_view: any;
  pro_show_display_status: any;

  constructor() {
    this.pro_show_display_id = 0;
    this.pro_show_display_name = "Nuevo Display";
    this.pro_show_display_weekday = [];
    this.pro_show_display_start_time = "00:00:00";
    this.pro_show_display_end_time = "23:59:59";
    this.pro_show_display_selection = new UserSelectionModel();
    this.pro_show_display_type = [
      { id: 1, name: "previo", value: 1 },
      { id: 2, name: "actual", value: 2 }
    ];
    this.pro_show_display_view = [
      { id: 1, name: "estandar", value: 1 },
      { id: 2, name: "historica", value: 2 },
      { id: 3, name: "grafica", value: 3 }
    ];
    this.pro_show_display_status = "A";
  }

  public fieldList() {
    return [
      { field_name: "pro_show_display_id", name: "display_id", text: "Id" },
      {
        field_name: "pro_show_display_name",
        name: "display_nombre",
        text: "Nombre"
      },
      {
        field_name: "pro_show_display_weekday",
        name: "display_dia",
        text: "Día"
      },
      {
        field_name: "pro_show_display_start_time",
        name: "display_hora_inicio",
        text: "Inicio"
      },
      {
        field_name: "pro_show_display_end_time",
        name: "display_hora_fin",
        text: "Fin"
      },
      {
        field_name: "pro_show_display_type",
        name: "tipo_display",
        text: "Display"
      },
      {
        field_name: "pro_show_display_selection",
        name: "display_seleccion",
        text: "Selección"
      },
      {
        field_name: "pro_show_display_view",
        name: "display_vista",
        text: "Vista"
      },
      {
        field_name: "pro_show_display_status",
        name: "display_status",
        text: "Status"
      }
    ];
  }

  public fieldInfo(field_name) {
    const register = this.fieldList();

    return register.filter(x => {
      return x.field_name === field_name;
    })[0];
  }

  public weekDayList() {
    const result = [
      { id: 1, name: "lunes", value: 1 },
      { id: 2, name: "martes", value: 2 },
      { id: 3, name: "miércoles", value: 3 },
      { id: 4, name: "jueves", value: 4 },
      { id: 5, name: "viernes", value: 5 },
      { id: 6, name: "sábado", value: 6 },
      { id: 7, name: "domingo", value: 7 }
    ];

    return result;
  }

  public displayTypeList() {
    const result = [
      { id: 1, name: "Llamadas entrantes", value: "inbound" },
      { id: 2, name: "Llamadas salientes", value: "outbound" },
      { id: 3, name: "Llamadas automáticas", value: "automatic" },
      { id: 4, name: "Agentes", value: "agents" }
    ];
    return result;
  }

  public viewTypeList() {
    const result = [
      { id: 1, name: "standard", value: 1 },
      { id: 2, name: "historic", value: 2 },
      { id: 3, name: "graph", value: 3 },
      { id: 4, name: "group", value: 4 }
    ];
    return result;
  }
}
