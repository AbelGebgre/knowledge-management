import { ChartTemplateComponent } from './../shared/components/chart-template/chart-template.component';
import { AccessComponent } from './components/container/access/access.component';
import { BodyComponent } from './components/ui/body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/container/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, 
    children:[
      { path: '', component:BodyComponent },
      { path: 'access', component:ChartTemplateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
