export class AlertModel {
  alertTitle?: string;
  alertText?: string;
  alertShow?: boolean;
  alertClass?: string;

  constructor() {
    this.alertTitle = '';
    this.alertText = '';
    this.alertShow = false;
    this.alertClass = '';
  }

  onResetAlert() {
    {
      this.alertTitle = '';
      this.alertText = '';
      this.alertShow = false;
      this.alertClass = '';
    }
  }

  onAlertError(error) {
    this.alertTitle = "Error del servidor";
    this.alertText = error;
    this.alertShow = true;
    this.alertClass = "alert alert-danger alert-dismissible fade show";
  }
}
