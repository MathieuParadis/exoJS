// 2.2.1 Calculs rapides
console.log("2.2.1 Calcul rapide");

let answer = "";
answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
n = Number(answer)

let result = `"Le résultat est : ${factoriel(n)}`
console.log(result);


function factoriel(number) {
  if (number === 0 || number === 1) {
    return 1
  } else {
    return number * factoriel(number-1);
  }
}

console.log("");

// 2.2.2 Pyramide de Mario
console.log("2.2.2 Pyramide de Mario");
nb_floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

pyramide(nb_floor)

function pyramide(number_of_floor) {
  for(let floor = 1; floor <=number_of_floor; floor++){
    blank = " ".repeat(number_of_floor-floor)
    brick = "#".repeat(floor)

    layer = blank + brick
    console.log(layer);
  }
}

