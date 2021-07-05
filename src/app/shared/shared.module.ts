import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

//export a component

@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule
  ],
  exports: [DividerComponent]
})
export class SharedModule { }
