import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTemplateComponent } from './components/table-template/table-template.component';
import { ChartTemplateComponent } from './components/chart-template/chart-template.component';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [TableTemplateComponent, ChartTemplateComponent],
  exports: [TableTemplateComponent, ChartTemplateComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    ToolbarModule,
    ChartModule
  ],
  providers:[ConfirmationService]
})
export class SharedModule { }
