export class Producto {
    static mapFromResponse(data: any): Producto {
        return new Producto(data.id,
            data.descripcion,
            data.stockMinimo,
            data.archivo)
    }
    constructor(public id: number,
        public descripcion: string,
        public stockMinimo: number,
        public archivo: string) { }
}
