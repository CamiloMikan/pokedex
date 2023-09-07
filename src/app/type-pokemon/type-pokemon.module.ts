import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypePokemonPageRoutingModule } from './type-pokemon-routing.module';

import { TypePokemonPage } from './type-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePokemonPageRoutingModule
  ],
  declarations: [TypePokemonPage]
})
export class TypePokemonPageModule {}
