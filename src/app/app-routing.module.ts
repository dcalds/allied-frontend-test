import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './pages/plan/plan.component';
import { PlatformComponent } from './pages/platform/platform.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent
  },
  {
    path: 'platforms',
    component: PlatformComponent
  },
  {
    path: 'plans',
    component: PlanComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
