import { Component, Input } from '@angular/core';

@Component({
  selector: 'listItensRelated',
  templateUrl: './listItensRelated.component.html',
  styleUrls: ['./listItensRelated.component.less']

})

export class ListItensRelatedComponent {
  @Input() title: string;
  @Input() listItens: string[];
}