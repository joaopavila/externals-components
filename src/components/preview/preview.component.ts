import { Component, Input } from '@angular/core';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.less']
})
export class PreviewComponent {
 @Input() docImages: string[];
}
