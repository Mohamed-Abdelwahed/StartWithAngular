import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // title:"header Componenets"
  constructor() { 
    
   }

  ngOnInit(): void {
  }
  
  header(){
    // return `header from ${this.title} `
  }
}
