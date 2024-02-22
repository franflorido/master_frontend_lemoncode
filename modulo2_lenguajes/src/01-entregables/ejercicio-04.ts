console.log("************** DELIVERABLE 04 *********************");

interface Books {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Array<Books>, titleToSearch: string): boolean {
  const isBook = books.find((element) => element.title === titleToSearch);
  return isBook ? isBook.isRead : false;
}

const books: Array<Books> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
  { title: "ACOTAR", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "ACOTAR")); // true
console.log(isBookRead(books, "TOG")); // flase
