import { StockHomeComponent } from './components/stock-home/stock-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StockHomeComponent,
  },
  {
    path: 'sentiment/:id',
    loadChildren: () =>
      import('./stock-details/stock-details.module').then(
        (m) => m.StockDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
