//The divs we want to edit
const averageDiv = document.querySelector(".average");
const nameDiv = document.querySelector(".name");
const occupationDiv = document.querySelector(".occupation");
const priceDiv = document.querySelector(".price");

//The starting list of original names and occupations.
const startingNames = ["Dr. Slice","Dr. Pressure","Prof. Possibility","Prof. Prism","Dr. Impulse","Prof. Spark","Dr. Wire","Prof. Goose"];
const startingOccupations = ["gardener","programmer","teacher","gardner"];
//The lists to be modified.
const names = ["Dr. Slice", "Dr. Pressure"];
const occupations = ["programmer", "teacher"];
const prices = [30,20];

function randomName(){
    i = Math.floor(Math.random()*startingNames.length);
    const name = startingNames[i];
    return name;
}
// console.log(randomName(names));

function randomOccupation(){
    i = Math.floor(Math.random()*startingOccupations.length);
    const occupation = startingOccupations[i];
    return occupation;
}
// console.log(randomOccupations(occupations));

function randomPrice(){
    return Math.ceil(Math.random()*100);
}
// console.log(randomPrice());

function render(){
    const name = names.map((str) => {
        return `<p>${str}<p>`;
    })
    const occupation = occupations.map((str) => {
        return `<p>${str}<p>`;
    })
    const price = prices.map((num) => {
        return `<p>$${num}<p>`;
    })
    nameDiv.innerHTML = name.join('');
    occupationDiv.innerHTML = occupation.join('');
    priceDiv.innerHTML = price.join('')
}

render();
setInterval(() => {
    const newName = randomName();
    names.push(newName);
    const newOccupation = randomOccupation();
    occupations.push(newOccupation);
    const newPrice = randomPrice();
    prices.push(newPrice);
    render();
}, 3000)