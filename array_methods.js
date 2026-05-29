let neighbours = ["Pakistan", "Nepal", "China", "Afghanistan"];

neighbours.push("Utopia");

neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a neighbour");
}

let index = neighbours.indexOf("China");
neighbours[index] = "Nationality of China";

console.log(neighbours);