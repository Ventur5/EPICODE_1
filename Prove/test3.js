const products = [
    {
        name: "glasses",
        price: 25,
        isDiscounted: true,
    },
    {
        name: "car",
        price: 30000,
        isDiscounted: false,
    },
    {
        name: "smartphone",
        price: 500,
        isDiscounted: true,
    },
    {
        name: "game",
        price: 50,
        isDiscounted: true,
    },
    {
        name: "heat",
        price: 15,
        isDiscounted: false,
    },
];

const shippingCost = 20;
const product = "game";

for (let i=0; i<products.length; i++) {
    const actualProducts = products[i]; //commando per assegnare un nome al posto di "products[i]"
    if (actualProducts.isDiscounted) {
        console.log(`${actualProducts.name} ti costa ${actualProducts.price}`);
    } else if (actualProducts.name === "car") {
        console.log(`${actualProducts.name} ti costa ${actualProducts.price + shippingCost + 400}`);
    } else {
        console.log(`${actualProducts.name} ti costa ${actualProducts.price + shippingCost}`);
    }
}