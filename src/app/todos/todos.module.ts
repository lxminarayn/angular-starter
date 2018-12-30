import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Comp1Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [Comp1Component]
})
export class TodosModule {}
