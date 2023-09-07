import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.page.html',
  styleUrls: ['./type-pokemon.page.scss'],
})
export class TypePokemonPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  
  pokedex() {
    this.router.navigate(['./pokedex'])
  }

}
