import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  layout: string = 'sidebar'; 
  menuTheme: string = 'light'; 
  topbarTheme: string = 'light'; 
  colorScheme: string = 'light';
  active: boolean= false; mobile:boolean = false;
  @Input() static:boolean;
  @Output() onlayout = new EventEmitter(); 
  @Output() onmenuTheme = new EventEmitter(); 
  @Output() ontopbarTheme = new EventEmitter(); 
  @Output() oncolorScheme = new EventEmitter();
  constructor() {
    let data = JSON.parse(localStorage.getItem('setting'));
    if(data){
      this.layout = data.layout;
      this.menuTheme = data.menuTheme;
      this.topbarTheme = data.topbarTheme;
      this.colorScheme = data.colorScheme;
      this.static = data.static;
    } 
    let width = document.getElementsByTagName('html')[0].clientWidth;
    if(width<=991){ this.mobile = true;  }
  }

  ngOnInit(): void {
  }
  onLayoutChange(){
    this.onlayout.emit(this.layout);
    this.savetoStorage();
  }
  onMenuThemeChange(){
    this.onmenuTheme.emit(this.menuTheme);
    this.savetoStorage();
  }
  onTopBarThemeChange(){
    this.ontopbarTheme.emit(this.topbarTheme);
    this.savetoStorage();
  }
  onColorSchemeChange(){
    this.topbarTheme = this.menuTheme = this.colorScheme;
    this.onmenuTheme.emit(this.menuTheme);
    this.ontopbarTheme.emit(this.topbarTheme);
    this.oncolorScheme.emit(this.colorScheme);
    this.savetoStorage();
    let themeElement = document.getElementById('theme');
    let layoutElement = document.getElementById('theme');
    // themeElement.setAttribute('href', './assets/theme-'+this.colorScheme+'.css');
    // layoutElement.setAttribute('href', './assets/layout-'+this.colorScheme+'.css');
  }
  savetoStorage(){
    let data = {
      layout:this.layout,
      menuTheme:this.menuTheme,
      topbarTheme:this.topbarTheme,
      colorScheme:this.colorScheme,
      static:this.static
    }
    localStorage.setItem('setting',JSON.stringify(data));
  }
}
