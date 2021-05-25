// 2.3.1. Startup Nation
console.log("2.3.1. Startup Nation");

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("");

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log("Entrepreneurs nés dans les années 70");
for (let entrepreneur of entrepreneurs) {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979);
	console.log(entrepreneur.first + " " + entrepreneur.last);
}

console.log("");

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Array avec les noms des entrepreneurs");
name_array = [];
for (let entrepreneur of entrepreneurs) {
  name_array.push(entrepreneur.first + " " + entrepreneur.last);
}
console.log(name_array);

console.log("");

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Age des entrepreuneurs");
for (let entrepreneur of entrepreneurs) {
  age = 2021 - entrepreneur.year
	console.log(entrepreneur.first + " " + entrepreneur.last + " : " + age);
}

console.log("");


// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Entrepreuneurs trié par alphabétique du nom de famille");

function dynamicSort(property) {
  return function (a,b) {
    let result = 0
    if (a[property] < b[property]) {
      result = -1;
    } else if(a[property] > b[property]) {
      result = 1;
    } else {
      result = 0;
    }
    return result;
  }
}

entrepreneurs.sort(dynamicSort("last"));
console.log(entrepreneurs);