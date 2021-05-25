
// 2.4.2. Acné-Bot
console.log("2.4.2. Acné-Bot");


// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

answer1 = "Ouais Ouais...";
answer2 = "Pwa, calme-toi...";
answer3 = "on s' fait une partie soum-soum ?" ;
answer4 = "t'es en PLS ?" ;
answer5 = "balek." ;

let answer = "";

while (true) {
  answer = prompt("Yo, sup?");
  if (answer.slice(-1)== "?") {
    alert(answer1);
  } else if (answer.length > 0 && answer == answer.toUpperCase()) {
    alert(answer2);
  } else if (answer.includes("Fortnite") || answer.includes("fortnite")) {
    alert(answer3);
  } else if (answer == "") {
    alert(answer4);
  } else if (answer == "quit") { 
    break; 
  } else {
    alert(answer5);
  }
}


