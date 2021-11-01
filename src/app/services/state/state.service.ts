import { Injectable } from '@angular/core';
import { PlanModel } from 'src/app/interfaces/Plan';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  selectedPlatform?: string;
  selectedPlan?: PlanModel;
  userData: any;

  constructor() { }

  setPlatform(platformSKU: string) {
    this.selectedPlatform = platformSKU;
  }

  getPlatform() {
    return this.selectedPlatform;
  }
}
