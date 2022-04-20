import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriquiComponent } from './pages/triqui/triqui.component';

const routes: Routes = [
{path:'', component: TriquiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
