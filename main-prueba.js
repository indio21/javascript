let Pizza = {
    id: ['1','2','3','4','5','6'],
    nombre: ['Muzzarella','Especial','Napo','Anana','Pollo','Calabresa'],
    ingredientes: [['Queso','Oregano'],['Queso','Jamon'],['Queso','Tomate','Oregano'],['Jamon','Anana'],['Queso','Jamon','Pollo'],['Queso','Salamin']],
    precio: [1000,1200,1600,1800,1650,1400]
}

let suma = 0;
const barra = '----------------------'

console.log(Pizza)

/* console.log(`Si. Hay ${suma} pizza/s que valen + de $600`)
console.log(`La pizza ${nombre} tiene un valor de ${precio}`)
console.log(`La pizza ${nombre} tiene estos ingredientes ${ingredientes}`) */

//let Pizza2 = {...Pizza}

 let Ejercicio = "Item a - Pizzas con id Impar"
 console.log(barra) 
console.log(Ejercicio)
console.log(barra)
for (let i = 1; i < 6;i+=2){
    console.log(`La pizza que tiene un id impar ${i} es ${Pizza.nombre[i]}`)
}

Ejercicio = "Item b - Si hay pizzas + a $600" 
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6;i++){
    if (Pizza.precio[i] > 600)
    {
        suma++;
    }  
}
console.log(`Si. Hay ${suma} pizza/s que valen + de $600`)

Ejercicio = "Item c - Pizza y su precio" 
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6;i++){
    console.log(`La pizza ${Pizza.nombre[i]} tiene un valor de $ ${Pizza.precio[i]}`)
}

Ejercicio = "Item d - Pizza y sus ingredientes" 
console.log(barra)
console.log(Ejercicio)
console.log(barra)
for (let i = 0; i < 6;i++){
    console.log(`La pizza ${Pizza.nombre[i]} tiene estos ingredientes:`);
    for (let x = 0; x <= Pizza.ingredientes.length;x++){
        console.log(`Ingrediente ${x} es ${Pizza.ingredientes[i][x]}`);
    }
}