import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastr: CustomToastrService) {
    this.toastr.message("Selam", "Bildirim", { messageType: ToastrMessageType.Info, position: ToastrPosition.BottomCenter }),
      this.toastr.message("Selamlar", "Bildirim", { messageType: ToastrMessageType.Success, position: ToastrPosition.TopRight })

  }
}
