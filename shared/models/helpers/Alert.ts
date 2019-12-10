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
    console.clear();
    {
      this.alertTitle = '';
      this.alertText = '';
      this.alertShow = false;
      this.alertClass = '';
    }
  }

  onAlertError(error) {
    this.alertTitle = "Error del servidor";
    this.alertText = (error.statusText);
    this.alertShow = true;
    this.alertClass = "alert alert-danger alert-dismissible fade show";
  }

  onSpanishError(text) {
    let result = text
    text = 'Unknown Error' ? 'Error desconocido (revise si el backend está funcionando)' : text;
    return result
  }
}
