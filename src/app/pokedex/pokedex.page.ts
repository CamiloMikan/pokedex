import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  listPokemon : any[]=[];
  estadoToken: any;

  constructor(
    public http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.ValidacionToken()
    this.http.get('assets/pokedex/pokemos.JSON').subscribe((data: any) => {
      this.listPokemon = data.results;
    });
  }

  ValidacionToken(){
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken  = JSON.parse(this.estadoToken);

    if (this.estadoToken == false){
      this.router.navigate(['./login'])
    }else{

    }
  }

  Navigate(pokemon: any) {
    // Obtén la URL del Pokémon desde el objeto
    const pokemonUrl = pokemon.pokemon.url;
  
    // Navegar a la página 'detailpokemon' con la URL del Pokémon como parámetro
    this.router.navigate(['detailpokemon', { url: pokemonUrl }]);
    
    // Almacena el objeto completo en localStorage si es necesario
    localStorage.setItem('results', JSON.stringify(pokemon));
  }
  

}
