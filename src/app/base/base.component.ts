import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(name: SpinnerType) {
    this.spinner.show(name);
    setTimeout(() => {
      this.spinner.hide(name);
    }, 300);
  }

  hideSpinner(name: SpinnerType) {
    this.spinner.hide(name);
  }
}


export enum SpinnerType {
  Cog = "s1",
  SquareJellyBox = "s2",
  BallSpinClockwise = "s3"
}
