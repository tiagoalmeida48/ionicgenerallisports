import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../models/produto.models';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(produtos: Produto[], texto: string): Produto[] {
    if (texto.length === 0) return produtos;

    texto = texto.toLocaleLowerCase();
    return produtos.filter(produtos => {
      return produtos.nomeProduto.toLocaleLowerCase().includes(texto);
    });
  }

}
