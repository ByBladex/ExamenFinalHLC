let servicioAnimal = new ServicioAnimales();

function getAnimales() {
    const request = new XMLHttpRequest();

    request.open('GET', 'zoo.json', true);
    request.onload = function() {
        if (this.status === 200) {
            const animales = JSON.parse(this.responseText);
            console.log(animales);
            let output = '';

            animales.forEach(function(animal) {
                if (animal.edad < this.numero.value) {
                    servicioAnimal.insertarAnimal(animal.nombre, animal.edad, animal.reino_animal);
                    output += `
                    <ul>
                        <li>${animal.nombre}</li>
                        <li>${animal.edad}</li>
                        <li>${animal.reino_animal}</li>
                    </ul>
                    `;
                }
            });
            document.getElementById("lista").innerHTML = output;
            console.log(servicioAnimal.getAnimales());
        }
    }
    request.send();
}


function main() {
    const numero = document.getElementById("numero");
    const radioAnimales = document.querySelectorAll("animales"); //No recuerdo como era el queryselectorall

    const btnMostrar = document.getElementById("btnMostrar");
    btnMostrar.addEventListener('click', getAnimales);
}

window.addEventListener('load', main);