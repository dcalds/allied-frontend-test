import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PlatformListModel } from 'src/app/interfaces/PlatformList';
import { PlanListModel } from 'src/app/interfaces/PlanList';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL: string = 'http://private-59658d-celulardireto2017.apiary-mock.com'

  constructor(
    private http: HttpClient
  ) { }

  getPLatforms() {    
    return this.http.get<PlatformListModel>(`${this.SERVER_URL}/plataformas`);
  }

  getPlans(platformSKU: string) {    
    return this.http.get<PlanListModel>(`${this.SERVER_URL}/planos/${platformSKU}`);
  }
}
