import { Component, OnInit } from "@angular/core";

// import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  status;
  constructor() {
    this.status = "disconnected";
  }

  ngOnInit() {
    console.clear();
    console.log("Bienvenidos a ProSer");
  }
}
