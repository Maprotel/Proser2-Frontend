# Mode

{id: 0, name: "Actual", value: "actual"} {id: 1, name: "Histórico", value:
"historic"}

```javascript
import { dateToDatePicker } from "shared/functions";

title;


    this.userSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    // this.rows = new DashboardInboundResponseModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;


  ngOnInit() {
    this.userSelectionCurrent();
    this.getReportListDashboard(this.userSelection);
    this.title = "Entrantes en tiempo real";
    this.onRepeat();
  }

userSelectionCurrent() {
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;

    this.userSelection.title = this.title;
    this.userSelection.mode = { id: 0, name: "Actual", value: "actual" };
    this.userSelection.start_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.end_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.current_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );

    this.userSelectionService.writeUserSelectionCurrent(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
  }



userSelectionHistoric() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;

    this.selectorVisibleFields.auxiliar = false;
    this.selectorVisibleFields.assignation = false;


    this.userSelection.title = this.title;
    this.userSelection.mode = { id: 1, name: "Histórico", value: "historic" };
    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
  }

```
