import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent {
  active: number = 0;

  @Input() title: string;
  @Input() itemMenu: string[];
  @Input() itemFilter: string[];

  @Output() filterMenu: EventEmitter<any> = new EventEmitter();
  @Output() checkList: EventEmitter<any> = new EventEmitter();
  @Output() btnFilter: EventEmitter<any> = new EventEmitter();

  getTypesCard(value: number) {
    if (this.active !== value) {
      this.active = value;
    };
    this.filterMenu.emit();
  }

  filterCheck() {
    this.checkList.emit();
  }

  filterBenefits() {
    this.btnFilter.emit();
  }
}
