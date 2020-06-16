import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Services
import { ProShowDisplayService } from "shared/services";
import {
  NotificationService,
  TranslateErrorService
} from "shared/services/";

// Models
import { ProShowDisplayModel } from "shared/models/";
@Component({
  selector: "app-display-crud-display-detail",
  templateUrl: "./crud-display-detail.component.html",
  styleUrls: ["./crud-display-detail.component.scss"]
})
export class CrudDisplayDetailComponent implements OnInit {
  selectedRecord: ProShowDisplayModel = new ProShowDisplayModel();

  recordForm: FormGroup;
  days = [];
  newProShowDisplay = new ProShowDisplayModel;
  type = [];

  constructor(
    private formBuilder: FormBuilder,
    private proShowDisplayService: ProShowDisplayService,
    private router: Router,
    private notification: NotificationService,
    private translateErrorService: TranslateErrorService
  ) {
    this.days = [
      { id: 1, value: "Lunes" },
      { id: 2, value: "Martes" },
      { id: 3, value: "Miércoles" },
      { id: 4, value: "Jueves" },
      { id: 5, value: "Viernes" },
      { id: 6, value: "Sábado" },
      { id: 7, value: "Domingo" }
    ];
    // this.type = this.newProShowDisplay.pro_show_display_type;
    this.type = [
      { id: 1, name: "previo", value: 1 },
      { id: 2, name: "actual", value: 2 }
    ];
  }

  ngOnInit(): void {
    this.proShowDisplayService.currentRecord.subscribe(data => {
      this.selectedRecord = data;
    });

    this.onFillForm();
  }

  onFillForm() {
    this.recordForm = this.formBuilder.group({
      pro_show_display_id: [this.selectedRecord.pro_show_display_id],
      pro_show_display_name: [
        this.selectedRecord.pro_show_display_name
      ],
      pro_show_display_weekday: [
        JSON.stringify(this.selectedRecord.pro_show_display_weekday),
        Validators.required
      ],
      pro_show_display_start_time: [
        this.selectedRecord.pro_show_display_start_time,
        Validators.required
      ],
      pro_show_display_end_time: [
        this.selectedRecord.pro_show_display_end_time,
        Validators.required
      ],
      pro_show_display_type: [
         JSON.stringify(this.selectedRecord.pro_show_display_type),
        Validators.required
      ],
      pro_show_display_status: [
        this.selectedRecord.pro_show_display_status,
        Validators.required
      ]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.recordForm.controls;
  }

  onReturn() {
    this.selectedRecord = new ProShowDisplayModel();
    this.proShowDisplayService.changeSelectedRecord(this.selectedRecord);
    this.router.navigate(["/layout/crud-display/crud-display-list"]);
  }

  onSubmit() {
    this.onReplaceOrCreate();
  }

  onReplaceOrCreate() {
    this.proShowDisplayService
      .replaceOrCreateRecord(this.recordForm.value)
      .subscribe(
        data => {
          this.notification.showSuccess(
            data.pro_show_display_name,
            "Turno Registrado"
          );
          this.selectedRecord = new ProShowDisplayModel();
          this.proShowDisplayService.changeSelectedRecord(this.selectedRecord);
          this.onFillForm();
        },
        error => {
          this.notification.showError(
            `${error.status}: ${this.translateErrorService.translateErrorNumber(
              error.status
            )}`,
            "Error de conexión"
          );
        }
      );
  }

  showSelectedProfile() {
    console.log(JSON.stringify(this.recordForm.value.pro_show_display_weekday));
  }
}
