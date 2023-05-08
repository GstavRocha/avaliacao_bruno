import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string;
  diretor: string;
  cartaz: string;
  origem: string;
  data: number;

  constructor(fs: FilmeService) {
    this.titulo = '';
    this.diretor= '';
    this.cartaz = '';
    this.origem = '';
    this.data =0;
  }

}
