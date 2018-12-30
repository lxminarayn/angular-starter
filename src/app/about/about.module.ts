import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryinfoComponent } from './primaryinfo/primaryinfo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrimaryinfoComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PrimaryinfoComponent]
})
export class AboutModule {}
