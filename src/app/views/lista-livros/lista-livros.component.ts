import { Livro, VolumeInfo, ImageLinks } from './../../models/interface';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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


  livrosResultadoParaLivros(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authores,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink ,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
      })
    });

    return livros;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



