import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { QRCodeDialogComponent } from './qrcode-dialog/qrcode-dialog.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [QRCodeDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    QRCodeComponent,
    SharedModule,
  ],
  exports: [
    QRCodeDialogComponent
  ]
})

export class QRModule { }
