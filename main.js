const Pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso', 'Oregano'],
        precio: 1000
    },
    {
        id: 2,
        nombre: 'Especial',
        ingredientes: ['Queso', 'Jamon'],
        precio: 1200
    },
    {
        id: 3,
        nombre: 'Napolitana',
        ingredientes: ['Queso', 'Tomate', 'Oregano'],
        precio: 1600
    },
    {
        id: 4,
        nombre: 'Anana',
        ingredientes: ['Jamon Crudo', 'Anana'],
        precio: 1800
    },
    {
        id: 5,
        nombre: 'Pollo',
        ingredientes: ['Queso', 'Jamon', 'Pollo'],
        precio: 1650
    },
    {
        id: 6,
        nombre: 'Calabresa',
        ingredientes: ['Queso', 'Salamin'],
        precio: 1400
    },
]

let suma = 0;
const barra = '----------------------'

let Ejercicio = "Pizzas"
console.log(Ejercicio)
console.log(Pizzas)

//console.log(`Si. Hay ${suma} pizza/s que valen + de $600`)
//console.log(`La pizza ${nombre} tiene un valor de ${precio}`)
//console.log(`La pizza ${nombre} tiene estos ingredientes ${ingredientes}`) 

//let Pizza2 = {...Pizza}

Ejercicio = "Item a - Pizzas con id Impar"
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6; i += 2) {
    console.log(`La pizza que tiene el id impar ${Pizzas[i].id} es ${Pizzas[i].nombre}`)
}

Ejercicio = "Item b - Si hay pizzas + a $600"
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6; i++) {
    if (Pizzas[i].precio > 600) {
        suma++;
    }
}
console.log(`Si. Hay ${suma} pizza/s que valen + de $600`)

Ejercicio = "Item c - Pizza y su precio"
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6; i++) {
    console.log(`La pizza ${Pizzas[i].nombre} tiene un valor de $${Pizzas[i].precio}`)
}

Ejercicio = "Item d - Pizza y sus ingredientes"
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6; i++) {
    console.log(`La pizza ${Pizzas[i].nombre} tiene estos ingredientes:`);
    for (let x = 0; x <= Pizzas[i].ingredientes.length-1; x++) {
        console.log(`Ingrediente ${x+1} es ${Pizzas[i].ingredientes[x]}`);
    }
} 