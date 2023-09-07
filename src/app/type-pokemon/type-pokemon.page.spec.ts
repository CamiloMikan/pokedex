import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypePokemonPage } from './type-pokemon.page';

describe('TypePokemonPage', () => {
  let component: TypePokemonPage;
  let fixture: ComponentFixture<TypePokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypePokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
