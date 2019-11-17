import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { EnvService } from "shared/services/helpers/env.service";

@Component({
  selector: "header-menu-brand",
  templateUrl: "./header-menu-brand.component.html",
  styleUrls: ["./header-menu-brand.component.scss"]
})
export class HeaderMenuBrandComponent implements OnInit {
  env;
  constructor(private router: Router, private envService: EnvService) {
    this.env = this.envService;
  }

  ngOnInit() {

  }

  onBrand() {
    // this.router.navigate(["/"]);
    this.router.navigate([`${this.env.host}`]);
  }
}
