import { Component, OnInit } from '@angular/core';
import { Factura, Item } from './factura.model';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']}
  )

export class FacturaComponent implements OnInit {
  ngOnInit(): void {} 
  constructor(){}

  facturas : Factura [] = []
  nombreProducto=""
  guardarFactura = true
  si = true
  eliminar = false
  nombre = "";
  precio = 0;
  
    agregarItem(id:number){ 
      try {
        if(this.nombre != "" && this.precio != 0){
          let item = new Item (this.nombre, this.precio, id)
          this.facturas[id].items.push(item) 
          this.nombre = ""
          this.precio = 0
        }
        return
      }catch (e) {
        console.log('Sin item para agregar=>', e)
      }
    }

    agregarFactura(){ 
      try {
        if(this.facturas.length > 1){
          this.guardarFactura =! this.guardarFactura}
          let factura = new Factura (this.facturas.length + 1, new Date(), [])
          this.facturas.push(factura)
          return
      }catch (e) {
        alert('Sin registro para guardar')
      }
    }

    eliminarFactura(){
      try {
        if( this.eliminar =! false ){}
        this.facturas.indexOf
      } catch (e) {
        alert('el registro seleccionado no existe')
      }
    }

 
}