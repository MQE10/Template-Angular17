import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DragndropDirective } from './dragndrop/dragndrop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    DragndropComponent,
    DragndropDirective,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastModule

  ],
  exports: [
    DragndropDirective
  ]
})
export class ComponentsModule { }
