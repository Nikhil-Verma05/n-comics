import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { BlackholeComponent } from './blackhole/blackhole.component';
import { TezasComponent} from './tezas/tezas.component';
import { GilluComponent} from './gillu/gillu.component';
import { RKComponent } from './rk/rk.component';
import{ NCKComponent } from './nck/nck.component';
import{ NPBComponent } from './npb/npb.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'characters', component: CharactersComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'news', component: NewsComponent},
  {path:'blackhole', component:BlackholeComponent},
  {path:'tezas', component:TezasComponent},
  {path:'gillu', component:GilluComponent},
  {path:'rk', component:RKComponent},
  {path:'nck', component:NCKComponent},
  {path:'npb', component:NPBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
