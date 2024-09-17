let marvel_heros = ["spiderman", "antman", "wolverine", "deadpool"]
marvel_heros.push("ironman", "thor", "thanos"); // push add an array item to end
console.log(marvel_heros);
marvel_heros.pop(); // pop removes an array item from the end
console.log(marvel_heros);
console.log(marvel_heros.toString()); // convert array to string
let dc_heros = ["superman", "batman", "flash"]
let heros = marvel_heros.concat(dc_heros)   // adding arrays
console.log(heros);
dc_heros.unshift("Aquaman")     // unshif add an item to start of array
console.log(dc_heros);
dc_heros.shift()     // shif removes an item from start of array
console.log(dc_heros);  
console.log(marvel_heros.slice(2,4));   // returns a piece of an array
marvel_heros.splice(0,2,"hulk", "blackpanther");    // splice changes orignal array (add, remove, replace)
console.log(marvel_heros);

let companies = ["Amazon", "Mirosoft", "Apple", "Google", "IBM"]
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"HP")
console.log(companies);
companies.push("Amazon")
console.log(companies);
