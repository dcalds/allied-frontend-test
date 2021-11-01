import { Injectable } from '@angular/core';
import { PlanModel } from 'src/app/interfaces/Plan';
import { PlatformModel } from 'src/app/interfaces/Platform';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  selectedPlatform?: PlatformModel;
  selectedPlan?: PlanModel;
  userData: any;

  constructor() { }

  setPlatform(platform: PlatformModel) {
    this.selectedPlatform = platform;
  }

  getPlatform() {
    return this.selectedPlatform;
  }

  setPlan(plan: PlanModel) {
    this.selectedPlan = plan;
  }

  getPlan() {
    return this.selectedPlan;
  }
}
