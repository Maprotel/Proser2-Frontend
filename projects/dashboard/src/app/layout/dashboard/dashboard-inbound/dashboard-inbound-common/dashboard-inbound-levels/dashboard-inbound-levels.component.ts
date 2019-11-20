import { Component, OnInit, Input } from "@angular/core";

// Installed modules
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";



import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-dashboard-inbound-levels",
  templateUrl: "./dashboard-inbound-levels.component.html",
  styleUrls: ["./dashboard-inbound-levels.component.scss"]
})
export class DashboardInboundLevelsComponent implements OnInit {
  @Input() rows;
  @Input() userSelection;

  argument;

  modalView;

  // Modal window variables
  activeModal: NgbActiveModal;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  // Show modal detail window
  openDetailModal(content, selected) {
    this.argument = selected;

    this.activeModal = this.modalService.open(content, {
      windowClass: "myCustomModalClass",
      keyboard: false
    });
  }
}
