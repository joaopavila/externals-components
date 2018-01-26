import { Component, Input} from '@angular/core';

@Component({
  selector: 'sendPictures',
  templateUrl: './sendPictures.component.html',
  styleUrls: ['./sendPictures.component.less']
})
export class SendPicturesComponent {
  aboutHidden: boolean = false;

  @Input() title: string;
  @Input() pictureItens: object[];
  @Input() titleModal: string;

  showModal() {
    this.aboutHidden = !this.aboutHidden;
  }

  close() {
    this.aboutHidden = false;
  }

}
