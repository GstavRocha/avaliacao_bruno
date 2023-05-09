import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  filme: { titulo: string, diretor: string, origem:string, cartaz:string,ano:number }[] = [];
  constructor(){
      this.filme = [{
        titulo : "O Poderoso Chefao",
        diretor: "francis Ford Coppola",
        origem: "Estados Unidos",
        cartaz: "/assets/img/chefao.webp",
        ano: 1972
      },{
        titulo:"O Grande ditador",
        diretor:"Charles Chaplin",
        origem: "Estados Unidos",
        cartaz: "/assets/img/charles.jpeg",
        ano:1940
      },{
        titulo:" Os Trapalhoes na Terra dos Monstros",
        diretor:"Flavio Migliaccio",
        origem: "Brasil",
        cartaz: "/assets/img/trapaloh.jpeg",
        ano:1989
      },{
        titulo:"A Origem",
        diretor:"Christopher Nolan",
        origem: "Estados Unidos",
        cartaz: "/assets/img/zorigem.jpeg",
        ano:2010
      }]
    }
    exibir(){
      console.log(this.filme)
      return this.filme;
    }
}
