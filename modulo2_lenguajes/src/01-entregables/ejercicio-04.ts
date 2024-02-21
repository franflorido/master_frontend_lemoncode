console.log("************** DELIVERABLE 04 *********************");

interface Books {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Array<Books>, titleToSearch: string): boolean {
  let leido: boolean = false;
  for (const item in books) {
    if (books[item]["title"] == titleToSearch) {
      leido = books[item]["isRead"];
    }
  }
  return leido;
}

const books: Array<Books> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
