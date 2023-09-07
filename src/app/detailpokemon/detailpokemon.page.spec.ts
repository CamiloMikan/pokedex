import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailpokemonPage } from './detailpokemon.page';

describe('DetailpokemonPage', () => {
  let component: DetailpokemonPage;
  let fixture: ComponentFixture<DetailpokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailpokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
