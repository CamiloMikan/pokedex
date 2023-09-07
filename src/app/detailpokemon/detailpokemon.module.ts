import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpokemonPageRoutingModule } from './detailpokemon-routing.module';

import { DetailpokemonPage } from './detailpokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpokemonPageRoutingModule
  ],
  declarations: [DetailpokemonPage]
})
export class DetailpokemonPageModule {}
