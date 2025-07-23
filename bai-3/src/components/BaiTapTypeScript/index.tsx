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

    addBook(book: Book): Book {
      this.books.push(book);
      return book;
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

  const book1 = new Book("viet nam", "ho chi minh", "1951980");
  const book2 = new Book("que huong", "chu tich", "987654321");
  const book3 = new Book("sinh nhat", "thanh dai", "2272005");

  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);

  library.listBooks();

  console.log("Tìm sách có từ 'sinh nhat':", library.findBook("sinh nhat"));

  library.removeBook("987654321");

  library.listBooks();

  //   Bài Tập 4: Hình học
  // Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
  // Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
  // Viết chương trình tính diện tích các hình và hiển thị kết quả.

  abstract class Shape {
    public abstract calculateArea(): number;
  }

  class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    public calculateArea(): number {
      return this.width * this.height;
    }
  }

  class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    public calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  const rectangle = new Rectangle(3, 3);

  console.log(`rectangle: ${rectangle.calculateArea()}`);

  const circle = new Circle(3);

  console.log(`circle: ${circle.calculateArea()}`);

  //   Bài Tập 5: Quản lý nhân viên
  // Tạo lớp Employee với các thuộc tính: name, position, salary.
  // Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails().
  // Tạo danh sách nhân viên và in thông tin chi tiết.

  class Employee {
    protected name: string;
    protected position: string;
    protected salary: number;

    constructor(name: string, position: string, salary: number) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  }

  class Manager extends Employee {
    public getDetails(): string {
      return `Quan ly: ${this.name} - Luong: ${this.salary}`;
    }
  }

  class Developer extends Employee {
    public getDetails(): string {
      return `Lap trinh Vien: ${this.name} - Luong: ${this.salary}`;
    }
  }

  const employee: Employee[] = [
    new Manager("Nguyen Van A", "Manager", 3000),
    new Developer("Nguyen Van B", "Developer", 2000),
  ];

  employee.map((item) => console.log((item as any).getDetails()));

  return <></>;
}

export default BaiTapTypeScript;
