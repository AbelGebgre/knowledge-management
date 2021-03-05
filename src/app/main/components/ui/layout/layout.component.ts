import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layout = 'sidebar';
  menuTheme = 'light';
  topbarTheme = 'light';
  colorScheme = 'light';
  activeSidebar = false; prevNode;
  static = false; id: string; search = false; mobileMenu = false;
  mobileV = false; Activate = false; mouseEnable = true;
  menus; display = true;
  constructor(private router: Router) {
    const data = null; // JSON.parse(localStorage.getItem('setting'));
    if (data){
      this.layout = data.layout;
      this.menuTheme = data.menuTheme;
      this.topbarTheme = data.topbarTheme;
      this.colorScheme = data.colorScheme;
      this.static = data.static;
    }
    const width = document.getElementsByTagName('html')[0].clientWidth;
    if (width <= 991){ this.layout = 'sidebar';  }
    this.menus = [
      {label: 'Home', icon: 'home', link: '/' , collapse: false},
      {label: 'Description', icon: 'sliders-v', link: '/home' , collapse: true,
          item: [
            {label: 'Run Charts', icon: 'chart-bar', link: '/run-charts', header: 'Graphical Methods'},
            {label: 'Ordering Charts', icon: 'chart-bar', link: '/ordering-charts'},
            {label: 'Special Charts', icon: 'chart-bar', link: '/special-charts'},
            {label: 'Hypothesis Test', icon: 'briefcase', link: '/hypothesis-test', header: 'Statistical Methods'},
            {label: 'Correlation Data', icon: 'briefcase', link: '/correlation-data'},
            {label: 'Multi-Correlation Data', icon: 'briefcase', link: '/multi-correlation-data'},
            {label: 'Exploratory Data Analysis', icon: 'money-bill', link: '/exploratory-data-analysis', header: 'Exploratory Data Analysis'}
          ],
          routers: ['/run-charts', '/ordering-charts', '/special-charts', '/hypothesis-test', '/correlation-data', '/multi-correlation-data', '/exploratory-data-analysis']
      },
      {label: 'Classification', icon: 'sitemap', link: '/' , collapse: true,
          item: [
            {label: 'Decision Trees', icon: 'sitemap', link: '/decision-trees', header: 'Logic Based Algorithms'},
            {label: 'Learning Set of Rules', icon: 'table', link: '/learning-set-of-rules'},
            {label: 'Single Layered Perceptron', icon: 'ellipsis-h', link: '/single-layered-perceptron', header: 'Perceptron Based Learners'},
            {label: 'Multi Layered Perceptron', icon: 'list', link: '/multi-layered-perceptron'},
            {label: 'Radial Basis Function Networks', icon: 'globe', link: '/radial-basis-function-networks'},
            {label: 'Naive Bayes Classifier', icon: 'filter', link: '/naive-bayes-classifier', header: 'Statistical Learners'},
            {label: 'Bayesian Networks', icon: 'align-right', link: '/bayesian-networks'},
            {label: 'K-nearest Neighbors', icon: 'clone', link: '/k-nearest-neighbors', header: 'K-nearest Neighbors'},
            {label: 'Support Vector Machines', icon: 'align-center', link: '/support-vector-machines', header: 'Support Vector Machines'},
          ],
          routers: ['/decision-trees', '/learning-set-of-rules', '/single-layered-perceptron', '/multi-layered-perceptron', '/radial-basis-function-networks',
                  '/naive-bayes-classifier', '/bayesian-networks', '/k-nearest-neighbors', '/support-vector-machines']
      },
      {label: 'Regression', icon: 'th-large', link: '/' , collapse: true,
          item: [
            {label: 'Linear regression', icon: 'desktop', link: '/linear-regression'},
            {label: 'Polynomial regression', icon: 'desktop', link: '/polynomial-regression'},
            {label: 'Multiple Linear regression', icon: 'desktop', link: '/multiple-linear-regression'},
            {label: 'Logistic regression', icon: 'desktop', link: '/logistic-regression', header: 'Generalized Linear Models'},
            {label: 'Poisson regression', icon: 'desktop', link: '/poisson-regression', last: true},
            {label: 'Log-linear Models', icon: 'desktop', link: '/log-linear-models'},
            {label: 'Regression Trees', icon: 'star-o', link: '/regression-trees'},
            {label: 'Neural Networks', icon: 'desktop', link: '/neural-networks'},
          ],
          routers: ['/linear-regression', '/polynomial-regression', '/multiple-linear-regression', '/logistic-regression',
                   '/poisson-regression', '/log-linear-models', '/regression-trees', '/neural-networks']
      },
      {label: 'Clustering', icon: 'bars', link: '/' , collapse: true,
          item: [
            {label: 'Agglomerative', icon: 'desktop', link: '/agglomerative', header: 'Hierarchical Methods'},
            {label: 'Divisive', icon: 'desktop', link: '/divisive'},
            {label: 'K-mean', icon: 'desktop', link: '/k-mean', header: 'Partitioning Methods'},
            {label: 'K-meloids', icon: 'desktop', link: '/k-meloids'},
            {label: 'DBSCAN', icon: 'desktop', link: '/DBSCAN', header: 'Density-based Methods'},
            {label: 'OPTICS', icon: 'desktop', link: '/OPTICS'},
            {label: 'DENCLUE', icon: 'star-o', link: '/DENCLUE'},
            {label: 'STING', icon: 'desktop', link: '/STING', header: 'Grid-based methods'},
            {label: 'WavCluster', icon: 'desktop', link: '/WavCluster'},
            {label: 'CLIQUE', icon: 'star-o', link: '/CLIQUE'}
          ],
          routers: ['/agglomerative', '/divisive', '/k-mean', '/k-meloids', '/DBSCAN', '/OPTICS', '/DENCLUE', '/STING', '/WavCluster', '/CLIQUE']
      },
      {label: 'Association', icon: 'star-o', link: '/' , collapse: true,
          item: [
            {label: 'Apriori Algorithm', icon: 'desktop', link: '/apriori-algorithm'},
            {label: 'FP-Growth Algorithm', icon: 'desktop', link: '/FP-Growth-algorithm'},
            {label: 'Dynamic Hashing & Pruning', icon: 'desktop', link: '/dynamic-hashing-&-pruning'},
            {label: 'Partition Algorithm', icon: 'desktop', link: '/partition-algorithm'},
            {label: 'Dynamic Itemset', icon: 'desktop', link: '/dynamic-itemset'},
            {label: 'Counting Tree-projection', icon: 'desktop', link: '/counting-tree-projection'}
          ],
          routers: ['/apriori-algorithm', '/FP-Growth-algorithm', '/dynamic-hashing-&-pruning',
                   '/partition-algorithm', '/dynamic-itemset', '/counting-tree-projection']
      },
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
  onclick(tag, type){
    if (this.layout == 'sidebar'){
      if (type != 'body'){
        this.Activate = true;
        this.collapse(tag);
      }
    }
    else{
      this.Activate = !this.Activate;
      this.collapse(tag);
    }
  }
  toggle(tag){
    if (this.layout != 'sidebar'){ this.collapse(tag); }
  }
  collapse(tag){
    const css = 'ng-trigger ng-trigger-children ng-star-inserted ng-animating';
    const baseUl = document.querySelectorAll('ul.layout-menu');
    let found = false; const i = 0;
    baseUl.forEach(listNode => {
      for (let index = 0; index < listNode.children.length; index++) {
        const node = listNode.children[index];
        if (this.layout == 'sidebar'){
          if (this.prevNode == node && node == tag){
            if (node.className == 'active-menuitem'){
              node.className = '';
              if (node.lastElementChild.hasAttribute('role')){
                node.lastElementChild.className = 'd-none';
              }
            }
            else{
              node.className = 'active-menuitem';
              if (node.lastElementChild.hasAttribute('role')){
                node.lastElementChild.className = 'delay ' + css;
              }
            }
          }
          else if (node == tag && this.Activate){
            this.prevNode = node;
            node.className = 'active-menuitem'; found = true;
            if (node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className =  'delay ' + css;
            }
          }
          else{
            node.className = '';
            if (node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className = 'd-none';
            }
          }
        }
        else{
          if (node == tag && this.Activate){
            this.prevNode = node;
            node.className = 'active-menuitem'; found = true;
            if (node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className =  'delay ' + css;
            }
          }
          else{
            node.className = '';
            if (node.lastElementChild.hasAttribute('role')){
              node.lastElementChild.className = 'd-none';
            }
          }
        }
      }
    });
  }
  getRouter(urls){
    let found = false;
    for (let index = 0; index < urls.length; index++) {
      if (this.router.url === urls[index]){
        found = true; break;
      }
    }
    return !found;
  }
  savetoStorage(){
    const data = {
      layout: this.layout,
      menuTheme: this.menuTheme,
      topbarTheme: this.topbarTheme,
      colorScheme: this.colorScheme,
      static: this.static
    };
    localStorage.setItem('setting', JSON.stringify(data));
  }
}
