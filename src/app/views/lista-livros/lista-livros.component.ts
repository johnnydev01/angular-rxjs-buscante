import { Item } from './../../models/interface';
import { LivroService } from './../../service/livro.service';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Subscription, switchMap, tap } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';

const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      map(items => this.livrosResultadoParaLivros(items))
    )


  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item =>  {
      return new LivroVolumeInfo(item);
    })
  }


}



