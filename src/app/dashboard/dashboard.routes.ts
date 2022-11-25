import { DetailComponent } from './../income-exit/detail/detail.component';
import { IncomeExitComponent } from './../income-exit/income-exit.component';
import { StatisticsComponent } from './../income-exit/statistics/statistics.component';
import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'incomes',
    component: IncomeExitComponent,
  },
  {
    path: '',
    component: StatisticsComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];
