const array = [
    {
        name: "Francesco",
        surname: "Rossi",
        age: 53,
        isDeveloper: true,
    },
    {
        name: "Lorenzo",
        surname: "Verdi",
        age: 22,
        isDeveloper: false,
    },
    {
        name: "Valerio",
        surname: "Ventura",
        age: 20,
        isDeveloper: true,
    },
    {
        name: "Alberto",
        surname: "Bertoldi",
        age: 44,
        isDeveloper: false,
    },
    {
        name: "Francesca",
        surname: "Celesti",
        age: 21,
        isDeveloper: false,
    },
]

for (let i = 0; i < array.length; i++) {
    if (array[i].isDeveloper) { // non ci sono i "===" perche va in standard su true
        console.log(`I developer sono: ${array[i].name}  ${array[i].surname}`)
    }
}

for (let i=0; i<array.length; i++) {
    if (array[i].isDeveloper === false && array[i].age < 40) {
        console.log(`${array[i].name} ${array[i].surname} non e' un developer e ha ${array[i].age} anni`)
    }
}