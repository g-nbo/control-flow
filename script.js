// Part 1: Growing Pains

// Declaring given variables
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plantReqSpace = 0.8;
const startingPlants = 20;

const weeks = 3; // 3 weeks of inputs for console.log results (check console for results)
let takenSpace = 0;
let totalPlants = startingPlants;


/// Predict the plant growth after a specific number of weeks
for (i = 1; i <= weeks; i++) {
    takenSpace += plantReqSpace * startingPlants * 2;
    totalPlants *= 2;
    console.log(`Week ${i} Results: `)
    console.log(`============================================`)
    console.log(`There's (${takenSpace} out of ${area}) sq meters of taken Space after ${i} week(s) of growth `);
    console.log(`There are ${totalPlants} Total Plants after ${i} week(s) of growth `);
    console.log(`============================================`)
}

// Implement control flow to make decisions on how to handle the growth of the plants
if (totalPlants <= 49) {
    console.log(`Planted, there is more room to plant more plants.`)
} else if (totalPlants > 49  && totalPlants <= 78) {
    console.log(`Monitored, they are growing at an acceptable rate.`)
} else if (totalPlants > 78) {
    console.log(`Pruned, stop them from exceeding the capacity of the garden.`)
}

let totalSpace = 0;
let newPlants = 0;
let newStartingPlants = 100;

// Part 2: Thinking Bigger
// function additionalSpace() {
//     for (i = 1; i <= 10; i++) {
//         totalSpace += plantReqSpace * newStartingPlants * 2;
//         newPlants += 100 * 2;
//         console.log(`Week ${i} Results: `)
//         console.log(`============================================`)
//         console.log(`There's (${totalSpace} sq meters taken after ${i} week(s) of growth `);
//         console.log(`There are ${newPlants} Total Plants after ${i} week(s) of growth `);
//         console.log(`============================================`)
//     }
// }

// additionalSpace();




