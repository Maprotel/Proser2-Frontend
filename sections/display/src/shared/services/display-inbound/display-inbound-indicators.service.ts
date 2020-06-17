//  Angular

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { isNullOrUndefined } from "util";

import { throwError, Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

import { EnvService } from "shared/services/helpers/env.service";
import { UserSelectionModel } from "shared/models";
@Injectable({
  providedIn: "root"
})

export class DisplayInboundIndicatorsService {
  constructor(private http: HttpClient, private env: EnvService) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getReportList(userSelection: UserSelectionModel): Observable<any> {
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/InvDisplays/displayInboundIndicators?access_token=${accessToken}`;
    const res = this.http
      .post(url_api, userSelection, {
        headers: this.headers
      })
      .pipe(
        map(data => data),
        catchError(this.handleError)
      );
    return res;
  }

  // get Show valid userSelection
  getDisplayShow(userSelection): Observable<any> {
    const query = JSON.stringify(userSelection);
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/InvDisplays/displayShow?access_token=${accessToken}`;
    const res = this.http.post(url_api, query, { headers: this.headers });
    // console.warn('Dashboard......' , url_api, query);

    return res;
  }


  getReportListHistoric(userSelection: UserSelectionModel): Observable<any> {
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/InvDisplays/displayInboundIndicatorsHistoric?access_token=${accessToken}`;
    const res = this.http
      .post(url_api, userSelection, {
        headers: this.headers
      })
      .pipe(
        map(data => data),
        catchError(this.handleError)
      );
    return res;
  }
}
