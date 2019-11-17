
import { UserbaseModel } from 'shared/models/';
import { Component, OnInit, Input } from "@angular/core";


@Component({
  selector: 'login-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() visibleMenus;
  @Input() currentUser;
  @Input() showInMenu;

  constructor(
  ) {

  }
  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
