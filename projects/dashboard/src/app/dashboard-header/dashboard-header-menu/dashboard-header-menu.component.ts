import { Component, OnInit, Input } from "@angular/core";
import { faIdBadge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'dashboard-dashboard-header-menu',
  templateUrl: './dashboard-header-menu.component.html',
  styleUrls: ['./dashboard-header-menu.component.scss']
})
export class DashboardHeaderMenuComponent implements OnInit {
  @Input() showInMenu;
  @Input() currentUser;

  faIdBadge = faIdBadge;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit() { }
}
