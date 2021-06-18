class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
}

class ServicioAnimales {
    constructor() {
        this.listado = []
    }

    getAnimales() {
        return this.listado;
    }

    getAnimal(ind) {
        return this.listado[ind];
    }

    insertarAnimal(nombre, edad, tipo) {
        this.listado.push(new Animal(nombre, edad, tipo));
    }
}