import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { BlackholeComponent } from './blackhole/blackhole.component';
import { TezasComponent } from './tezas/tezas.component';
import { GilluComponent } from './gillu/gillu.component';
import { RKComponent } from './rk/rk.component';
import { NCKComponent } from './nck/nck.component';
import { NPBComponent } from './npb/npb.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CharactersComponent,
    ContactComponent,
    NewsComponent,
    HomeComponent,
    BlackholeComponent,
    TezasComponent,
    GilluComponent,
    RKComponent,
    NCKComponent,
    NPBComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
