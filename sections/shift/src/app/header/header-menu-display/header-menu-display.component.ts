import { Component, OnInit } from "@angular/core";
// import { faLaptop, faIdBadge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import {
  faLaptop,
  faSignOutAlt,
  faIdBadge
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-display-header-menu-display",
  templateUrl: "./header-menu-display.component.html",
  styleUrls: ["./header-menu-display.component.scss"]
})
export class HeaderMenuDisplayComponent implements OnInit {
  faIdBadge = faIdBadge;
  faSignOutAlt = faSignOutAlt;
  faLaptop = faLaptop;
  constructor() {}

  ngOnInit() {}
}
