import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('item') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1
    const item:Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }

  adiconarItemNaLista(nomeItem: string) {
    const item = this.criarItem(nomeItem)
    this.listaDeCompra.push(item)
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1,1, itemEditado)
  }

  limparLocalStorage() {
    localStorage.setItem("item", JSON.stringify([]))
    this.listaDeCompra = []
  }

  atualizarLocalstorage() {
    localStorage.setItem("item", JSON.stringify(this.listaDeCompra))
  }

}
