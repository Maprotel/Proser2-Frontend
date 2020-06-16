// Angular
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Router } from "@angular/router";

// Vendor
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

// Services
import { EnvService } from "shared/services/helpers/env.service";

// Models
import { ProShowDisplayModel } from "shared/models/";

@Injectable({
  providedIn: "root"
})
export class ProShowDisplayService {
  // Current user
  private currentRecordSource = new BehaviorSubject<ProShowDisplayModel>(
    new ProShowDisplayModel()
  );
  currentRecord = this.currentRecordSource.asObservable();
  apiUrl = "http://localhost:3151";

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) {}

  // Inmutable

  // Methods
  getRecords(): Observable<ProShowDisplayModel[]> {
    // Define api url
    const apiString = `${this.apiUrl}/api/ProShowDisplays`;
    // Get backend info
    return this.http
      .get<ProShowDisplayModel[]>(apiString, { responseType: "json" })
      .pipe(map(data => data));
  }

  getSingleRecord(id): Observable<ProShowDisplayModel> {
    // let id = record.PersonId;
    return this.http
      .get<ProShowDisplayModel>(`${this.apiUrl}/api/ProShowDisplays/${id}`)
      .pipe(map(data => data));
  }

  postRecord(record: ProShowDisplayModel): Observable<ProShowDisplayModel> {
    //delete record.personId
    return this.http
      .post<ProShowDisplayModel>(
        `${this.apiUrl}/api/ProShowDisplays`,
        record
      )
      .pipe(map(data => data));
  }

  replaceOrCreateRecord(
    record: ProShowDisplayModel
  ): Observable<ProShowDisplayModel> {
    //delete record.personId
    return this.http
      .post<ProShowDisplayModel>(
        `${this.apiUrl}/api/ProShowDisplays/replaceOrCreate`,
        record
      )
      .pipe(map(data => data));
  }

  putRecord(record: ProShowDisplayModel) {
    let id = null;
    if (record) {
      id = record.pro_show_display_id;
    }
    const query = JSON.stringify(record);
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}${this.apiUrl}/${id}?access_token=${accessToken}`;

    return this.http
      .put<ProShowDisplayModel>(url_api, query)
      .pipe(map(data => data));
  }

  deleteRecord(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/api/ProShowDisplays/${id}`)
      .pipe(map(data => data));
  }

  ping() {
    return this.http.get(`${this.apiUrl}/ping`);
  }

  /******************************** */

  // Observable variables

  changeSelectedRecord(record) {
    this.currentRecordSource.next(record);
  }
}