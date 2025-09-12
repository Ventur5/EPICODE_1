let car = {
    color: "red",
    price: 20000,
    model: "sportivo",
    isAvailable: true,

}

let car2 = {
    color: "green",
    price: 10000,
    model: "suv",
    isAvailable: false,

}

let car3 = {
    color: "black",
    price: 15000,
    model: "normal",
    isAvailable: true,

}

let summPrice = (car.price + car2.price + car3.price);

let array = [
    {
        name: "headphones",
        price: 5000,
        color: "blue",
        isDiscounted: false,
    },
    {
        name: "computer",
        price: 2500,
        color: "silver",
        isDiscounted: false,
    },
    {
        name: "iphone",
        price: 1250,
        color: "gold",
        isDiscounted: true,
    },
];

for (let i = 0; i < array.length; i++){
    if (array[i].isDiscounted === true) {
        console.log(`il prodotto scontato è: ${array[i].name}`)
    }
}