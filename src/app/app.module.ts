import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { ContentComponent } from './Components/LayoutComponents/content/content/content.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [       
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
