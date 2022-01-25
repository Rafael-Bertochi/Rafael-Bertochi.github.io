import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { OrdemComprarComponent } from './views/components/ordem/ordem-comprar/ordem-comprar.component';
import { OrdemReadComponent } from './views/components/ordem/ordem-read/ordem-read.component';
import { OrdemVenderComponent } from './views/components/ordem/ordem-vender/ordem-vender.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ordem/pesquisa/:id',
    component: OrdemReadComponent
  },
  {
    path: 'ordem/comprar/:id',
    component: OrdemComprarComponent
  },
  {
    path: 'ordem/vender/:id',
    component: OrdemVenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
