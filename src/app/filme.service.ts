import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  filme: Filme[];
  constructor(){
    this.filme = [];
   }
  exibir(): Filme[]{
    return this.filme;
  }
}
