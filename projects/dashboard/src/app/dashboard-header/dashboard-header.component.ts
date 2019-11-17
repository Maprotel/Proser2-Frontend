import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Input() showInMenu;
  @Input() currentUser;
  @Input() visibleMenus

  constructor() { }

  ngOnInit() {
  }

}
