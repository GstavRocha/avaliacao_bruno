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
  filme: Filme[];
  constructor(private fs: FilmeService) {
    this.filme = this.fs.exibir()
  }

}
