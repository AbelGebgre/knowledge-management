import { BodyComponent } from './components/ui/body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/container/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      { path: 'home', component: BodyComponent },
      { path: 'run-charts', component: BodyComponent },
      { path: 'ordering-charts', component: BodyComponent },
      { path: 'special-charts', component: BodyComponent },
      { path: 'hypothesis-test', component: BodyComponent },
      { path: 'correlation-data', component: BodyComponent },
      { path: 'multi-correlation-data', component: BodyComponent },
      { path: 'exploratory-data-analysis', component: BodyComponent },
      { path: 'decision-trees', component: BodyComponent },
      { path: 'learning-set-of-rules', component: BodyComponent },
      { path: 'single-layered-perceptron', component: BodyComponent },
      { path: 'multi-layered-perceptron', component: BodyComponent },
      { path: 'radial-basis-function-networks', component: BodyComponent },
      { path: 'naive-bayes-classifier', component: BodyComponent },
      { path: 'bayesian-networks', component: BodyComponent },
      { path: 'k-nearest-neighbors', component: BodyComponent },
      { path: 'support-vector-machines', component: BodyComponent },
      { path: 'linear-regression', component: BodyComponent },
      { path: 'polynomial-regression', component: BodyComponent },
      { path: 'multiple-linear-regression', component: BodyComponent },
      { path: 'logistic-regression', component: BodyComponent },
      { path: 'poisson-regression', component: BodyComponent },
      { path: 'log-linear-models', component: BodyComponent },
      { path: 'regression-trees', component: BodyComponent },
      { path: 'neural-networks', component: BodyComponent },
      { path: 'agglomerative', component: BodyComponent },
      { path: 'divisive', component: BodyComponent },
      { path: 'k-mean', component: BodyComponent },
      { path: 'k-meloids', component: BodyComponent },
      { path: 'DBSCAN', component: BodyComponent },
      { path: 'OPTICS', component: BodyComponent },
      { path: 'DENCLUE', component: BodyComponent },
      { path: 'STING', component: BodyComponent },
      { path: 'WavCluster', component: BodyComponent },
      { path: 'CLIQUE', component: BodyComponent },
      { path: 'apriori-algorithm', component: BodyComponent },
      { path: 'FP-Growth-algorithm', component: BodyComponent },
      { path: 'dynamic-hashing-&-pruning', component: BodyComponent },
      { path: 'partition-algorithm', component: BodyComponent },
      { path: 'dynamic-itemset', component: BodyComponent },
      { path: 'counting-tree-projection', component: BodyComponent },
      { path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
