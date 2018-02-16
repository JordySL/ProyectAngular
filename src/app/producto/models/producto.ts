export class Producto {
    static mapFromResponse(data: any): Producto {
        return new Producto(data.id,
            data.descripcion,
            data.stockminimo,
            data.archivo)
    }
    constructor(public id: number,
        public descripcion: string,
        public stockminimo: number,
        public archivo: string) { }
}
