import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PlanModel } from 'src/app/interfaces/Plan';
import { PlatformModel } from 'src/app/interfaces/Platform';
import { ApiService } from 'src/app/services/api/api.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  items: MenuItem[] = [];
  activeIndex: number = 1;
  plans: Array<PlanModel> = [];
  selectedPlatform?: PlatformModel;

  constructor(
    public router: Router,
    private apiService: ApiService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.getSelectedPlatform();
    this.items = [
      { label: 'Plataforma' },
      { label: 'Plano' },
      { label: 'Dados Pessoais' },
    ];
  }

  getSelectedPlatform(): void {
    this.selectedPlatform = this.stateService.getPlatform();

    // REINICIA O FLUXO EM CASO DE PERDA DO ESTADO
    this.selectedPlatform ? this.getAllPlans(this.selectedPlatform.sku) : this.router.navigate(['/platforms']);
  }

  async getAllPlans(platformSKU: string) {
    const response = await this.apiService.getPlans(platformSKU);
    response.subscribe(
      data => {
        this.plans = data.planos;
      },
      err => {
        console.log('Erro:', err);
      }
    )
  }

  selectPlan(plan: PlanModel): void {
    this.stateService.setPlan(plan);
    this.router.navigate(['/personal-form']);
  }

}
