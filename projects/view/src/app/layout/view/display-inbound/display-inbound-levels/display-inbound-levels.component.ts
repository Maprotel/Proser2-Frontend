import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-display-inbound-levels",
  templateUrl: "./display-inbound-levels.component.html",
  styleUrls: ["./display-inbound-levels.component.scss"]
})
export class DisplayInboundLevelsComponent implements OnInit {
  @Input() displayUserSelection;
  @Input() rows;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    // console.error("displayUserSelection", this.displayUserSelection.mode.name);
  }

  openModal(content) {
    this.modalService.open(content, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }
}
