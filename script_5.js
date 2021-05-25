// 2.3.2. Bibliothécaire
console.log("2.3.2. Bibliothécaire");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("");

// Est-ce que tous les livres ont été au moins empruntés une fois ?
let count = 0
console.log("Livres empruntés au moins une fois");
for (let book of books) {
  if (book.rented > 0) {
    console.log(`${book.title} a été emprunté au moins une fois`);
    count += 1
  } else {
    console.log(`${book.title} n'a jamais été emprunté`);
  }
}

console.log("");

if (count === books.length) {
  console.log("Tous les livres ont été empruntés au moins une fois ");
} else {
  console.log("Tous les livres n'ont pas été empruntés au moins une fois ");
}

console.log("");


let max = books[0].rented;
let min = books[0].rented;
let id = 873495;
let id_to_delete = 133712;

books.forEach(book => {
  if(book.rented > max) {
    max = book.rented;
    most_rented_book = book;
  }

  if(book.rented < min) {
    min = book.rented;
    least_rented_book = book;
  }

  if(book.id === id) {
    book_id = book;
  }

  if(book.id === id_to_delete) {
    book_to_delete = book;
    books.splice(book, 1)
  }
});

// Quel est livre le plus emprunté ?
console.log("Livre le plus emprunté");
console.log(`Le livre le plus emprunté est ${most_rented_book.title}, et a été emprunté ${most_rented_book.rented} fois`);

console.log("");


// Quel est livre le moins emprunté ?
console.log("Livre le moins emprunté");
console.log(`Le livre le moins emprunté est ${least_rented_book.title}, et a été emprunté ${least_rented_book.rented} fois`);

console.log("");


// Trouve le livre avec l'ID: 873495 ;
console.log("Livre avec l'ID: 873495");
console.log(`Le livre avec l'ID: 873495 est ${book_id.title}`);

console.log("");

// Supprime le livre avec l'ID: 133712 ;
console.log("Suppression du livre avec l'ID: 133712");
console.log(`Le livre avec l'ID: 133712 est ${book_to_delete.title}`);
console.log(`Ci-dessus l'array books apres suppression de ${book_to_delete.title}`);
console.log(books)

console.log("");


// Trie les livres par ordre alphabétique.
console.log("Trie des livres par ordre alphabétique");
console.log(`Ci-dessus l'array books trié par ordre alphabétique du titre`);

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

books.sort(dynamicSort("title"));
console.log(books);