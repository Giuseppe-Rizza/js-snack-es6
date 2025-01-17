//Creo array oggetti bici

const cycles = [

    {
        "name" : "Bianchi",
        "weight" : 4
    },

    {
        "name" : "Cannondale",
        "weight" : 2
    },

    {
        "name" : "Colnago",
        "weight" : 1
    },

    {
        "name" : "Scott",
        "weight" : 5
    },

    {
        "name" : "Trek",
        "weight" : 3
    }

];

console.table(cycles);


let lightBike = cycles[0];

for (let i = 0; i < cycles.length; i++) {

    if (cycles[i].weight < lightBike.weight) {

        lightBike = cycles[i];
    }
    
}

let lowerWeight = Math.min(cycles.weight);

console.log(`La bici più leggera è ${lightBike.name} e pesa ${lightBike.weight}`);