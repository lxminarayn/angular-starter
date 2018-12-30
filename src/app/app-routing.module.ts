import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppComponent1Component } from './app-component1/app-component1.component';
import { AppComponent2Component } from './app-component2/app-component2.component';
import { AppComponent3Component } from './app-component3/app-component3.component';
import { AppComponent4Component } from './app-component4/app-component4.component';
import { AppComponent5Component } from './app-component5/app-component5.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosModule } from './todos/todos.module';
import { AboutModule } from './about/about.module';
import { FeaturesModuleModule } from './features-module/features-module.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent1Component,
    pathMatch: 'full'
  },
  {
    path: 'comp1',
    component: AppComponent1Component
  },
  {
    path: 'comp2',
    component: AppComponent2Component
  },
  {
    path: 'comp3',
    component: AppComponent3Component
  },
  {
    path: 'comp4',
    component: AppComponent4Component,
    children: [
      {
        path: 'comp5',
        component: AppComponent5Component
      }
    ]
  },
  {
    path: 'features',
    loadChildren: () => FeaturesModuleModule
  },
  {
    path: 'todos',
    loadChildren: () => TodosModule
  },
  {
    path: 'aboutus',
    loadChildren: () => AboutModule
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
