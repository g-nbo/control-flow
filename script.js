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


/// For loop to predict the plant growth after a specific number of weeks
for (i = 1; i <= weeks; i++) {
    takenSpace += plantReqSpace * startingPlants * 2;
    totalPlants *= 2;
    console.log(`Week ${i} Results: `)
    console.log(`============================================`)
    console.log(`There's (${takenSpace} out of ${area}) sq meters of taken Space after ${i} week(s) of growth `);
    console.log(`There are ${totalPlants} Total Plants after ${i} week(s) of growth `);

    // Implement control flow to make decisions on how to handle the growth of the plants
    if (totalPlants <= 49) {
        console.log(`Planted, there is more room to plant more plants.`)
    } else if (totalPlants > 49  && totalPlants <= 78) {
        console.log(`Monitored, they are growing at an acceptable rate.`)
    } else if (totalPlants > 78) {
        console.log(`Pruned, stop them from exceeding the capacity of the garden.`)
    }
    console.log(`============================================`)
} // Week 1: Plant more, Week 2: Pruned, Week 3: Pruned.




let totalSpace = 0;
let newStartingPlants = 100;
let newPlants = newStartingPlants;

// Part 2: Thinking Bigger

//The amount of additional space required if the scientist start with 100 and did not prune for 10 weeks
function additionalSpace() {
    for (i = 1; i <= 10; i++) {
        totalSpace += plantReqSpace * newStartingPlants * 2;
        newPlants *= 2;
        console.log(`Week ${i} Results: `)
        console.log(`============================================`)
        console.log(`There's (${totalSpace} sq meters taken after ${i} week(s) of growth `);
        console.log(`There are ${newPlants} Total Plants after ${i} week(s) of growth `);
        console.log(`============================================`)
    }

    // The radius of the new expanded garden
    let newRadius = Math.sqrt(1600 / PI);
    let additionalSpace = totalSpace - area;
    console.log(`New radius of the circle is equal to ${newRadius}.`);
    console.log(`Additional Space required = ${additionalSpace}.`);

}

additionalSpace(); // There are 1600 sq meters taken and 102400 total plants after 10 weeks of growth
                    // Additional space = 




