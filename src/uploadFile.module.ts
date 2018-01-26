import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UploadComponent } from './components/upload/upload.component';
import { SendPicturesComponent } from './components/sendPictures/sendPictures.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PreviewPictureComponent } from './components/previewPicture/previewPicture.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    UploadComponent,
    SendPicturesComponent,
    PreviewComponent,
    PreviewPictureComponent
  ],
  declarations: [
    UploadComponent,
    SendPicturesComponent,
    PreviewComponent,
    PreviewPictureComponent
  ],
})
export class UploadFileLibraryModule {}
