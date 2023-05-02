import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { EstudiosComponent } from './estudios/estudios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
