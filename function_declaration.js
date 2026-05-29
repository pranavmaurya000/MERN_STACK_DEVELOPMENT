function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let india = percentageOfWorld1(1440);
let china = percentageOfWorld1(1410);
let japan = percentageOfWorld1(124);

console.log(india);
console.log(china);
console.log(japan);

let percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1440));
console.log(percentageOfWorld2(1410));
console.log(percentageOfWorld2(124));