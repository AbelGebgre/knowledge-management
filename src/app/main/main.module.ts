import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { DashboardComponent } from './components/container/dashboard/dashboard.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import { ConfigComponent } from './components/ui/config/config.component';
import { BodyComponent } from './components/ui/body/body.component';
import { AccessComponent } from './components/container/access/access.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({ 
  declarations: [DashboardComponent, FooterComponent, LayoutComponent, DashboardComponent, ConfigComponent, BodyComponent, AccessComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RadioButtonModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    SharedModule,
    AuthModule
  ]
})
export class MainModule { }
