import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComp1Component } from '@app/features-module/feature-comp1/feature-comp1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FeatureComp1Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [FeatureComp1Component]
})
export class FeaturesModuleModule {}
