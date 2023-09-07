import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypePokemonPage } from './type-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: TypePokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypePokemonPageRoutingModule {}
