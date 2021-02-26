import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layout: string = 'sidebar'; 
  menuTheme: string = 'light'; 
  topbarTheme: string = 'light'; 
  colorScheme: string = 'light';
  activeSidebar:boolean = false; prevNode;
  static:boolean = false; id:string; search:boolean=false; mobileMenu:boolean= false;
  mobileV:boolean=false; Activate:boolean=false; mouseEnable:boolean = true;
  menus;
  constructor(private router:Router) { 
    let data = JSON.parse(localStorage.getItem('setting'));
    if(data){
      this.layout = data.layout;
      this.menuTheme = data.menuTheme;
      this.topbarTheme = data.topbarTheme;
      this.colorScheme = data.colorScheme;
      this.static = data.static;
    }
    let width = document.getElementsByTagName('html')[0].clientWidth;
    if(width<=991){ this.layout = "sidebar";  }
    this.menus =[
      {label:'Dashboard',icon:'home', link:"/" ,collapse:false,item:[]},
      {label:'UI Kit',icon:'star-o', link:"/" ,collapse:true,
            item:[
              {label:'Display',icon:'desktop', link:"/desktop"},
              {label:'Display2',icon:'desktop', link:"/desktop2"},
              {label:'Display3',icon:'desktop', link:"/desktop3"},
              {label:'Display4',icon:'desktop', link:"/desktop4"},
              {label:'Display5',icon:'desktop', link:"/desktop5"},
              {label:'Display6',icon:'desktop', link:"/desktop6"}
            ],
            routers:['/desktop','/desktop2','/desktop3','/desktop4','/desktop5','/desktop6']
      },
      {label:'UI Kit2',icon:'star-o', link:"/" ,collapse:true,
          item:[
            {label:'Display6',icon:'desktop', link:"/desktop6"},
            {label:'Display7',icon:'desktop', link:"/desktop7"},
            {label:'access',icon:'desktop', link:"/access"},
            {label:'Display9',icon:'desktop', link:"/desktop9"},
            {label:'Display10',icon:'desktop', link:"/desktop10"},
            {label:'Display11',icon:'desktop', link:"/desktop11"}
          ],
          routers:['/desktop6','/desktop7','/desktop8','/desktop9','/desktop10','/desktop11']
      },
      {label:'UI Kit3',icon:'star-o', link:"/" ,collapse:true,
          item:[
            {label:'Display12',icon:'desktop', link:"/desktop12"},
            {label:'Display13',icon:'desktop', link:"/desktop13"},
            {label:'Display14',icon:'desktop', link:"/desktop14"},
            {label:'Display15',icon:'desktop', link:"/desktop15"},
            {label:'Display16',icon:'desktop', link:"/desktop16"},
            {label:'Display17',icon:'desktop', link:"/desktop17"}
          ],
          routers:['/desktop12','/desktop13','/desktop14','/desktop15','/desktop16','/desktop17']
      }
    ];
  }
  ngOnInit(): void { 
  }
  layoutChange(value){
    this.layout = value;
  }
  menuThemeChange(value){
    this.menuTheme = value;
  }
  topbarThemeChange(value){
    this.topbarTheme = value;
  }
  colorSchemeChange(value){
    this.colorScheme = value;
  }
  pin(){
    this.static = !this.static;
    this.savetoStorage();
  }
  mobileView(value){
    this.mobileMenu = value;
  }
  onclick(tag,type){
    if(this.layout=="sidebar"){
      if(type!="body"){
        this.Activate = true; 
        this.collapse(tag);
      }  
    }
    else{ 
      this.Activate=!this.Activate;
      this.collapse(tag);
    }
  }
  toggle(tag){
    if(this.layout!="sidebar"){ this.collapse(tag); }
  }
  collapse(tag){
    let css = "ng-trigger ng-trigger-children ng-star-inserted ng-animating";
    let baseUl = document.querySelectorAll('ul.layout-menu');
    let found:boolean =false; let i = 0;
    baseUl.forEach(listNode => {
      for (let index = 0; index < listNode.children.length; index++) {
        let node = listNode.children[index];
        if(this.layout == 'sidebar'){
          if(this.prevNode == node && node == tag){
            if(node.className == "active-menuitem"){
              node.className = "";  
              if(node.lastElementChild.hasAttribute('role')){
                node.lastElementChild.className = "d-none";
              }
            }
            else{
              node.className = "active-menuitem";
              if(node.lastElementChild.hasAttribute('role')){
                node.lastElementChild.className = 'delay '+css;
              }
            }
          }
          else if(node == tag && this.Activate){ 
            this.prevNode = node; 
            node.className = "active-menuitem"; found = true;
            if(node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className =  'delay '+css;
            } 
          }
          else{ 
            node.className = "";  
            if(node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className = "d-none";
            } 
          } 
        }
        else{
          if(node == tag && this.Activate){ 
            this.prevNode = node; 
            node.className = "active-menuitem"; found = true;
            if(node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className =  'delay '+css;
            } 
          }
          else{ 
            node.className = "";  
            if(node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className = "d-none";
            } 
          }
        }
      }
    });
  }
  getRouter(urls){
    let found:boolean = false;
    for (let index = 0; index < urls.length; index++) {
      if(this.router.url === urls[index]){
        found = true; break;
      }
    }
    return !found;
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
