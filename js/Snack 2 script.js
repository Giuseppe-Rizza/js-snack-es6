//Creo array oggetti bici

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


for (let i = 0; i < teams.length; i++) {
    teams[i].points;
    teams[i].fouls;
}