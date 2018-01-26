import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UploadComponent } from './components/upload/upload.component';
import { ListItensRelatedComponent } from './components/listItensRelated/listItensRelated.component';
import { SendPicturesComponent } from './components/sendPictures/sendPictures.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PreviewPictureComponent } from './components/previewPicture/previewPicture.component';

import { SantanderFormsLibraryModule, SantanderConversationLibraryModule, SantanderLibraryModule } from 'santander-portal-library';


@NgModule({
  imports: [
    BrowserModule,
    SantanderLibraryModule,
    SantanderFormsLibraryModule,
    SantanderConversationLibraryModule
  ],
  exports: [
    UploadComponent,
    ListItensRelatedComponent,
    SendPicturesComponent,
    PreviewComponent,
    PreviewPictureComponent
  ],
  declarations: [
    UploadComponent,
    ListItensRelatedComponent,
    SendPicturesComponent,
    PreviewComponent,
    PreviewPictureComponent
  ],
})
export class UploadFileLibraryModule {}
