
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template:'<h1>Helllo from componenet component</h1>',
  // styles:['h1{color:red;border:5px solid green;padding:1.5rem}']
})
export class AppComponent {
  title = 'AngularDemo';

  sayHello(){
    return `hello from say hello , ${this.title}`
  }
}
