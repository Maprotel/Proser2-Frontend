// Angular
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

// Vendor
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

// Services
import { ProShowDisplayService } from "shared/services";
import {
  NotificationService,
  TranslateErrorService,
} from "shared/services/";

// Models
import { ProShowDisplayModel } from "shared/models/";

// Pipe
import { Ng2SearchPipe } from "ng2-search-filter";

@Component({
  selector: 'app-display-crud-display-list',
  templateUrl: './crud-display-list.component.html',
  styleUrls: ['./crud-display-list.component.scss']
})
export class CrudDisplayListComponent implements OnInit {

  selectedList: ProShowDisplayModel[];
  selectedRecord: ProShowDisplayModel = new ProShowDisplayModel();
  selectedRow: number;

  fullList: ProShowDisplayModel[];
  findInList: string;

  closeResult = "";

  term;

  constructor(
    private modalService: NgbModal,
    private proShowDisplayService: ProShowDisplayService,
    private router: Router,
    private notification: NotificationService,
    private translateErrorService: TranslateErrorService,
    private ng2SearchPipe: Ng2SearchPipe
  ) { }

  ngOnInit(): void {
    this.onGetRecords();
    this.proShowDisplayService.currentRecord.subscribe((data) => {
      this.selectedRecord = data;
    });
  }

  onGetRecords() {
    this.proShowDisplayService.getRecords().subscribe(
      (data) => {
        this.selectedList = data;
        this.fullList = data;
      },
      (error) => {
        this.notification.showError(
          `${
          error.status
          }: ${this.translateErrorService.translateErrorNumber(
            error.status
          )}`,
          "Error de conexión"
        );
      }
    );
  }

  updateSelection(record, i) {
    console.log("record", record);

    this.selectedRow = i;
    this.selectedRecord = record;
    this.proShowDisplayService.changeSelectedRecord(record);
  }


  onNewRecord() {
    let record: ProShowDisplayModel = new ProShowDisplayModel();
    this.proShowDisplayService.changeSelectedRecord(record);
    this.router.navigate(["crud-display/crud-display-detail"]);
  }

  onEditRecord() {
    this.router.navigate(["crud-display/crud-display-detail"]);
  }

  onDeleteRecord(record) {
    this.proShowDisplayService.deleteRecord(record.key).subscribe(
      (data) => {
        if (data.count > 0) {
          let foo_object = record;
          this.selectedList = this.selectedList.filter(
            (obj) => obj !== foo_object
          );
          this.notification.showInfo(
            this.selectedRecord.pro_show_display_name,
            "Turno eliminado"
          );
          this.selectedRecord = new ProShowDisplayModel();
          this.selectedRow = null;
        }
      },
      (error) => {
        this.notification.showError(
          `${
          error.status
          }: ${this.translateErrorService.translateErrorNumber(
            error.status
          )}`,
          "Error de conexión"
        );
      }
    );
    this.modalService.dismissAll(
      `Dismissed ${this.getDismissReason("Deleted record")}`
    );
  }

  /**************************** */
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(
            reason
          )}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
