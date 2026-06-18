class Book {
  constructor(title, author) {
    this.title = title;   
    this.author = author; 
  }
}
class EBook extends Book {
  constructor(title, author, fileSize) {
    super(title, author);  
    this.fileSize = fileSize; 
  }
  getInfo() {
    return `Nomi: ${this.title}, Muallif: ${this.author}, Hajmi: ${this.fileSize} MB`;
  }
}

const ebook1 = new EBook("JavaScript", "Akbar Toshmatov", 5.2);
console.log(ebook1.getInfo());