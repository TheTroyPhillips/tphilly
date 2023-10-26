const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    },
]

module.exports = coffeeMenu

//const coffeenames = coffeeMenu.map((record) => record.name);
//console.log(coffeenames)

//const cheapdrinks = coffeeMenu.map((record) => record.price);
//console.log(cheapdrinks)
//for (let i = 0; i <= cheapdrinks.length -1; i++) {
//    console.log(cheapdrinks[i] <=5)
//}

//const evendrinks = coffeeMenu.map((record) => record.price);
//console.log(evendrinks)
//for (let i = 0; i <= evendrinks. length -1; i++) {
//    console.log(evendrinks[i] % 2 === 0)
//}

const totalcostnumbers = coffeeMenu.map((record) => record.price);

const initialvalue = 0;

const totalcost = totalcostnumbers.reduce((accumulator, current) => accumulator + current, initialvalue);
console.log(totalcost)

