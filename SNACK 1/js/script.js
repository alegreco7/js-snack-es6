//SNACK 1
const bikes = [
    {
        name: "Rose X-Lite 04",
        peso: "7",
    },
    {
        name: "TCR Advanced",
        peso: "5"
    },
    {
        name: "KTM Revelator",
        peso: "10"
    },
    {
        name: "Endurace CF SLX 8",
        peso: "7"
    },
    {
        name: "Raise AXS 07",
        peso: "8"
    },
    {
        name: "Aero M20ILTD",
        peso: "5"
    },
    {
        name: "Scott Addict SE",
        peso: "9"
    },
    {
        name: "Litening Air C:68X",
        peso: "6"
    },
];

let bici;
for (let i = 1; i < bikes.length; i++) {
    let {peso} = bikes[i];
    if(parseInt(peso) < bikes[0].peso){
        peso_minore = peso;
        bici = bikes[i].name;
    }
}
const mex = document.getElementById('mex');
let text = `${bici} è la bicicletta meno pesante : ${peso_minore}`;
mex.innerText = text;
console.log(text);
