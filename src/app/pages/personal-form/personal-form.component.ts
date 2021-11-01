import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PlanModel } from 'src/app/interfaces/Plan';
import { PlatformModel } from 'src/app/interfaces/Platform';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  items: MenuItem[] = [];
  activeIndex: number = 2;
  selectedPlatform?: PlatformModel;
  selectedPlan?: PlanModel;
  userForm!: FormGroup;

  constructor(
    public router: Router,
    private stateService: StateService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getSelectedPlan();
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      nascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
    }); 
    this.items = [
      { label: 'Plataforma' },
      { label: 'Plano' },
      { label: 'Dados Pessoais' },
    ];
  }

  getSelectedPlan(): void {
    this.selectedPlan = this.stateService.getPlan();

    // REINICIA O FLUXO EM CASO DE PERDA DO ESTADO
    this.selectedPlan ? this.selectedPlatform = this.stateService.getPlatform() : this.router.navigate(['/platforms']);
  }

  onSubmit() {
    console.log("Nome:", this.userForm.value.nome);
    console.log("Email:", this.userForm.value.email);
    console.log("Data de Nascimento:", this.userForm.value.nascimento);
    console.log("CPF:", this.userForm.value.cpf);
    console.log("Telefone:", this.userForm.value.telefone);

    console.log("Plano Selecionado: ", this.selectedPlan?.sku)
  }

}
