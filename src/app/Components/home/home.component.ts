import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/Iproduct';
import { CompanyInfo } from '../../Shared/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  companyDetails: CompanyInfo | undefined;

  mainProducts: IProduct[];

  servicesVisible: boolean | undefined;

  constructor() {
    this.servicesVisible = true;
    let services = ['MArketting', 'Sales', 'E-commers'];
    this.companyDetails = new CompanyInfo(
      'ITICompany',
      'https://picsum.photos/250/250',
      services
    );

    this.mainProducts = [
      { ID: 1, Name: 'Phone', Quantity: 1, Price: 1000 },
      { ID: 2, Name: 'computers', Quantity: 0, Price: 10000 },
      { ID: 3, Name: 'laptop', Quantity: 20, Price: 15000 },
      { ID: 4, Name: 'keyboard', Quantity: 5, Price: 500 },
    ];
  }

  toggleServices() {
    this.servicesVisible = !this.servicesVisible;
  }
}
