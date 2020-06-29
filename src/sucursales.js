let sucursales = {
    bd: './data/theaters.json',
    titulo: "Nuestras Salas",
    leerJSON: function() {
        let theatherJson = fs.readFileSync(this.bd, 'utf-8');
        let theather = JSON.parse(theatherJson);
        return theather
    },
    cantidad: function() {
        return this.leerJSON().total_theaters
    },
    listarCines: function() {
        let theaters = this.leerJSON();

        return theaters.theaters
    }
}
module.exports = sucursales