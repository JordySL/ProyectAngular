export class Producto {
    static mapFromResponse(data: any): Producto {
        return new Producto(data.id,
            data.descripcion,
            data.stockMinimo,
            data.fechaRegistro,
            data.archivo,
            data.total)
    }
    constructor(public id: number,
        public descripcion: string,
        public stockMinimo: number,
        public fechaRegistro: number,
        public archivo: string,
        public total: number) { }
}
