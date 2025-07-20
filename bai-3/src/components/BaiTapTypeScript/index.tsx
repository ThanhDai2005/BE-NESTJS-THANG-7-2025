function BaiTapTypeScript() {
  // Bài Tập 1: Quản lý học sinh

  class Student {
    public name: string;
    public age: number;
    public grade: string;

    constructor(name: string, age: number, grade: string) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }

    display(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
  }

  const student = new Student("dai", 20, "university");
  student.display();

  // Bài Tập 2: Hệ thống ngân hàng

  class BankAccount {
    public accountNumber: string;
    public balance: number;

    constructor(accountNumber: string, balance: number) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }

    deposit(amount: number): void {
      this.balance += amount;
    }

    withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Số dư không đủ");
      } else {
        this.balance -= amount;
      }
    }
  }

  class SavingAccount extends BankAccount {
    public interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }

    calculateInterest(): number {
      return (this.balance * this.interestRate) / 100;
    }
  }

  const mySaving = new SavingAccount("123456789", 1000, 5);
  mySaving.deposit(50);
  mySaving.withdraw(200);
  const interest = mySaving.calculateInterest();

  console.log(`Số dư hiện tại: ${mySaving.balance}`);
  console.log(`Tiền lãi: ${interest}`);

  // Bài Tập 3: Quản lý thư viện

  class Book {
    public title: string;
    public author: string;
    public ISBN: string;

    constructor(title: string, author: string, ISBN: string) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }
  }

  class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
      this.books.push(book);
    }

    removeBook(ISBN: string): void {
      this.books = this.books.filter((book) => book.ISBN != ISBN);
    }

    findBook(title: string): Book[] {
      return this.books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    listBooks(): void {
      console.log("Danh sách sách trong thư viện:");
      this.books.map((book) => {
        console.log(`${book.title} by ${book.author} (ISBN: ${book.ISBN})`);
      });
    }
  }

  const library = new Library();

  const book1 = new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "123456789"
  );
  const book2 = new Book("1984", "George Orwell", "987654321");
  const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "111111111");

  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);

  library.listBooks();

  console.log("Tìm sách có từ 'great':", library.findBook("great"));

  library.removeBook("987654321");

  library.listBooks();

  return <></>;
}

export default BaiTapTypeScript;
