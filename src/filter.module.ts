import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterComponent } from './components/filter/filter.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    FilterComponent
  ],
  declarations: [
    FilterComponent
  ],
})
export class FilterLibraryModule {}