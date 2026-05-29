function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let populations = [1440, 1428, 341, 68];

console.log(populations.length === 4);

let percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);