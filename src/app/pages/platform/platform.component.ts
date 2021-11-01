import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformModel } from 'src/app/interfaces/Platform';
import { ApiService } from 'src/app/services/api/api.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  platforms: Array<PlatformModel> = [];

  constructor(
    public router: Router,
    private apiService: ApiService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.getAllPlatforms();
  }

  async getAllPlatforms() {
    const response =  await this.apiService.getPLatforms();
    response.subscribe(
      data => {
        this.platforms = data.plataformas;
      },
      err => {
        console.log('Erro:', err);
      }
    )
  }

  selectPLatform(platformSKU: string): void {
    this.stateService.setPlatform(platformSKU);
    this.router.navigate(['/plans']);
  }

}
