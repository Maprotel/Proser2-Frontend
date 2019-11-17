import { Component, OnInit, Input } from "@angular/core";
import { UserSelectionModel } from "shared/models";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { OutboundIndicators } from "projects/display/src/app/shared/models";

@Component({
  selector: "app-display-outbound-calls",
  templateUrl: "./display-outbound-calls.component.html",
  styleUrls: ["./display-outbound-calls.component.scss"]
})
export class DisplayOutboundCallsComponent implements OnInit {
  @Input() rows;
  @Input() displayUserSelection;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    // console.error('displayOutboundCallsIndicators', this.displayOutboundCallsIndicators);
  }

  openModal(content) {
    this.modalService.open(content, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }
}
