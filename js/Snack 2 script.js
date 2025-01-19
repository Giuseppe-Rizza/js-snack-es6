//Creo array oggetti squadre di calcio

const teams = [

    {
        "name" : "Crotone",
        "points" : 0,
        "fouls" : 0
    },

    {
        "name" : "Atalanta",
        "points" : 0,
        "fouls" : 0
    },

    {
        "name" : "Catania",
        "points" : 0,
        "fouls" : 0
    },

    {
        "name" : "Napoli",
        "points" : 0,
        "fouls" : 0
    },

    {
        "name" : "Palermo",
        "points" : 0,
        "fouls" : 0
    }

];

console.table(teams);


const genRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


for (let i = 0; i < teams.length; i++) {

    for (let key in teams[i]) {
        if (teams[i][key] === 0) {
            teams[i][key] = genRandomNumber(1, 30);
        }
    }
};


const numberOfFouls = [];


for (let i = 0; i < teams.length; i++) {
    numberOfFouls.push({ name: teams[i].name, fouls: teams[i].fouls})
}

console.log(numberOfFouls);
