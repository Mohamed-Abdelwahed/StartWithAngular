import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../../Shared/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  companyDetails: CompanyInfo | undefined;
  servicesVisible : boolean | undefined;

  constructor() { 
    this.servicesVisible = true;
    let services = ["MArketting" , "Sales" , "E-commers"]
    this.companyDetails = new CompanyInfo("ITICompany" , 'https://picsum.photos/250/250',services )
  }
  
  toggleServices(){
  this.servicesVisible = !this.servicesVisible;
  }



  
}
