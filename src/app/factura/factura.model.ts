export class Factura{
    constructor(
        public id: number, 
        public fecha : Date, 
        public items:Item[]
        ) {}
}


export class Item{
    constructor(
        public nombre: string, 
        public precio : number, 
        public idfactura:number
        ) {}
}