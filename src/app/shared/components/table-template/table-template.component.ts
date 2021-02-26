import { ColumnModel } from './../../models/shared.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent implements OnInit {
  products; selectedProducts; expanded:boolean = false;

  @Input() columns:ColumnModel[]; 
  @Input() data:any;
  @Input() caption:string;
  @Input() captionButtons = [];
  @Input() filter = [];
  @Input() tableButtons = [];
  @Input() hasCheckbox:boolean = false;
  @Input() hasCollapse:boolean = false;

  @Output() onViewDetail = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor(private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.products = this.data;
  }
  canBeSorted(column){
    if(column.sortable){  return column.name; }
    return '';
  }
  onButtonClick(event,type){
    if(type=='delete' || type=='Delete'){ 
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.onDelete.emit(event);  
        }
      });
    }
    else{ this.onViewDetail.emit(event) }
  }
}
