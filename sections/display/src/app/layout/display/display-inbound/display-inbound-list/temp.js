// Start
  ngOnInit() {
    console.log(this.userSelection, "this.userSelection");
    this.getDisplayShow();
    this.setHeaderInfo();
    // this.getReportList();
    this.filterFieldList = this.model.fieldList();
    this.numberOfRowsInTable = { id: 10, value: 10 };
    this.exportName = "reporte-conexión";

    this.initialSelectedFilterField = {
      field_name: "start_date",
      name: "fecha_inicio",
      text: "Fecha desde"
    };
    // this.onRepeat();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.timerComponent.unsubscribe();
    // this.timerClock.unsubscribe();
  }

  onRepeat() {
    if (true) {
      this.timerComponent = timer(1000, 5000);
      this.timerClock = timer(1000, 1000);

      this.getReportList();
      this.subscription.add(
        this.timerComponent.subscribe(() => {
          if (
            objectDateToTextDate(this.userSelection.start_date) ===
            this.currentDate
          ) {
            this.getReportList();
          } else {
          }
        })
      );

      this.timerClock.subscribe(() => {
        this.timerConnected = this.timerConnected + 1;
      });
    } else {
      this.subscription.unsubscribe();
      // this.timerComponent.unsubscribe();
      // this.timerClock.unsubscribe();
    }
  }

  // setHeaderInfo(userSelection) {
  //   userSelection.title = "Display de llamadas entrantes";
  //   userSelection.options = "-";
  //   userSelection.legend = "-";
  //   userSelection.current_date = moment().format('YYYY-MM-DD');
  //   return userSelection;
  // }

  setHeaderInfo() {
    let userSelection: UserSelectionModel = new UserSelectionModel();
    let proShowDisplay: ProShowDisplayModel = this.proShowDisplayRes[0];
    userSelection.start_time = proShowDisplay.pro_show_display_start_time;
    userSelection.end_time = proShowDisplay.pro_show_display_end_time;
    proShowDisplay.pro_show_display_type == "actual"
      ? (userSelection.start_date = moment().format("YYYY-MM-DD"))
      : (userSelection.start_date = moment().subtract(1, 'd').format('YYYY-MM-DD'));
    userSelection.end_date = moment().format("YYYY-MM-DD");

    userSelection.title = "Display de llamadas entrantes";
    userSelection.options =
      userSelection.start_time + "-" + userSelection.end_time;
    userSelection.legend = proShowDisplay.pro_show_display_name;
    
    return userSelection;
  }

  // Get records from backend
  getReportList() {
    this.userSelection = this.setHeaderInfo();

    this.displayInboundIndicatorsService
      .getReportList(this.userSelection)
      .subscribe(
        (res: DisplayInboundResponseModel) => {
          this.timerConnected = 0;

          if (res) {
            this.rows = res;
            this.userSelection = res.userSelection;

          } else {
            console.error("Error", res);
          }
          this.alertMessage = new AlertModel();
        },
        error => {
          console.error("Error", error);
          this.show = false;
          this.alertService.error(error.status);
          this.alertMessage.alertTitle = "Error del servidor";
          this.alertMessage.alertText = error.statusText;
          this.alertMessage.alertShow = true;
          this.alertMessage.alertClass =
            "alert alert-danger alert-dismissible fade show";
        }
      );
  }

  // Get records from backend
  getDisplayShow() {
      this.displayInboundIndicatorsService
        .getDisplayShow()
        .subscribe(
          res => {
            this.proShowDisplayRes = res;
            console.log(this.proShowDisplayRes, "this.proShowDisplayRes");
              // let temp2 = JSON.parse(temp);
             
            this.alertMessage = new AlertModel();
          },
          error => {
            console.error("Error", error);
            this.show = false;
            this.alertService.error(error.status);
            this.alertMessage.alertTitle = "Error del servidor";
            this.alertMessage.alertText = error.statusText;
            this.alertMessage.alertShow = true;
            this.alertMessage.alertClass =
              "alert alert-danger alert-dismissible fade show";
          }
        );
  }

  // Show modal detail window
  openDetailModal(content, selected) {
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  // Show or hide graph or table buttons
  onShowHideGraphButtons() {
    this.graph = !this.graph;
    this.show_graph_or_table_button = !this.show_graph_or_table_button;
  }
  // Data table activate
  onActivate(event) {
    this.row_selection = event.row;
    if (event.type === "dblclick") {
    }
  }
  // Datatable select
  onSelect(event) {
    this.selected = event.selected;
  }

  // Update on return of selector in header
  onReturnHeaderResult(event) {
    this.userSelection = new UserSelectionModel("userSelection");
    this.getReportList();
    this.show_graph_or_table_button = false;
    this.childGraph ? this.childGraph.generateGraph("header", this.rows) : "";
  }

  // Activated by button
  onRecalculate(event) {
    this.userSelection = new UserSelectionModel("userSelection");
    this.getReportList();
    this.show_graph_or_table_button = false;
    console.error("this.rows", this.rows);

    this.childGraph ? this.childGraph.generateGraph("button", this.rows) : "";
  }

  // Response report finder to display number of rows in table
  onReturnNumberOfRowsInTable(event) {
    console.error("event", event);
    this.numberOfRowsInTable = event;
  }

  // Response report finder
  onReturnRowsForTable(event) {
    this.rows = event;
  }

  // Helper function to expose detail fields from a row
  onObjectToArray(data) {
    let obj = data[0];

    let output;
    if (obj !== undefined) {
      output = Object.entries(obj).map(([key, value]) => ({
        key,
        value
      }));
    }
    return output;
  }

  // temporary method to generate excel map for exporting model
  onCreateModel(model?) {
    model = new DisplayInboundModel().fieldList();

    console.error("model", model);

    let obj = {};

    model.map(x => {
      obj[`${x.name}`] = "x." + x.field_name;
    });

    let newModel = JSON.stringify(obj);
    let newModel2 = JSON.stringify(
      newModel
        .replace(/\"/g, "")
        .replace(/:/g, ": ")
        .replace(/,/g, ",\n ")
    );
    let model3 = eval(newModel2);

    console.error("model", model3);
  }

  //Test function for modal
  openModal(content) {
    // this.rows_detail = this.rows_detail_original.filter(x => {
    //   return x.agent_id === this.row_selection.agent_id;
    // });
    // this.rows_detail_total = this.rows_original.filter(x => {
    //   return x.agent_id === this.row_selection.agent_id;
    // });
    // this.activeModal = this.modalService.open(content, {
    //   windowClass: "my-class",
    //   keyboard: false
    // });
  }
}
