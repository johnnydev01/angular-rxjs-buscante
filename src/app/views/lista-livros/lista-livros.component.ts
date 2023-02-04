import { Livro, VolumeInfo, ImageLinks, Item } from './../../models/interface';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Livro[];
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) { }


  buscarLivros() {
    this.subscription = this.service.buscar(this.campoBusca).subscribe({
      next: (items) => {
        console.log('Items', items)
        this.listaLivros = this.livrosResultadoParaLivros(items);
        console.log('Lista Livro', this.listaLivros)
      },
      error: erro => console.log(erro),
    });
  }


  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item =>  {
      return new LivroVolumeInfo(item);
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



