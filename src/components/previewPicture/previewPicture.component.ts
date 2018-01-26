import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { LinkItemModel } from 'santander-portal-library';

@Component({
  selector: 'previewPicture',
  templateUrl: './previewPicture.component.html',
  styleUrls: ['./previewPicture.component.less']
})
export class PreviewPictureComponent {
  @Output('close') cl: EventEmitter<any> = new EventEmitter();
  @Input() docImages: string[];

  modalVisible = false;

  footer: LinkItemModel = {
            title: 'Enviar Imagem',
            link: ''
          };

  direc: string = '';
  hideContinue: boolean = true;

  constructor(private router: Router) {}

  close(bool = false, type) {
    this.cl.emit({bool: bool, type: type});
  }

  sendImage() {
    if ( this.docImages[0] !== '') {
      this.direc = '/address-page';
      this.router.navigate([this.direc]);
    } else {
      this.hideContinue = true;
    }
  }
}
