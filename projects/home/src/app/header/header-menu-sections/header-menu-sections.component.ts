import { Component, OnInit, Input } from "@angular/core";


import { AuthService } from "shared/services/helpers/auth.service";

import { Router } from "@angular/router";
import { logout } from "shared/functions";

import {
  faDigitalTachograph,
  faChartArea,
  faSwatchbook,
  faMarker,
  faEye,
  faMagic,
  faUserTie,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'login-header-menu-sections',
  templateUrl: './header-menu-sections.component.html',
  styleUrls: ['./header-menu-sections.component.scss']
})
export class HeaderMenuSectionsComponent implements OnInit {
  showInMenu;
  @Input() currentUser;

  faDigitalTachograph = faDigitalTachograph;
  faChartArea = faChartArea;
  faSwatchbook = faSwatchbook;
  faMarker = faMarker;
  faEye = faEye;
  faMagic = faMagic;
  faUserTie = faUserTie;
  faLaptop = faLaptop;



  displayLink
  dashboardLink
  reportsLink
  configurationLink
  auditLink
  systemLink
  viewsLink
  userLink

  testLink


  constructor(
    private authService: AuthService,
    private router: Router

  ) {

    this.testLink = 'http://localhost/proser_reports/dist/test/'
    this.displayLink = 'http://localhost/proser_reports/dist/display/'
    this.dashboardLink = 'http://localhost/proser_reports/dist/dashboard/'
    this.reportsLink = 'http://localhost/proser_reports/dist/reports/'
    this.configurationLink = 'http://localhost/proser_reports/dist/configuration/'
    this.auditLink = 'http://localhost/proser_reports/dist/audit/'
    this.systemLink = 'http://localhost/proser_reports/dist/system/'
    this.viewsLink = 'http://localhost/proser_reports/dist/views/'
    this.userLink = 'http://localhost/proser_reports/dist/user/'
  }

  ngOnInit() {
    this.onShowSectionMenus()
  }

  onLogout() {
    this.authService.logoutUser().subscribe(data => {
      this.router.navigate(["/"]);
    });
  }

  onShowSectionMenus() {
    this.showInMenu = this.authService.getCurrentUserValue()
  }
}
