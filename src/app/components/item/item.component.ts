import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item

  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoItemParaExcluir = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {

   }

  ngOnChanges(): void {

  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deletar() {
    console.log('Estão tentando nos calar')
    this.emitindoItemParaExcluir.emit(this.item.id)
  }


  checarItem() {
    if(this.item.comprado = true) {
      this.item.comprado = false
    }else {
      this.item.comprado = true
    }
  }

  ngOnDestroy(): void {
    console.log("Estão conseguindo me calar")
  }

}
