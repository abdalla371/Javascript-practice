
    const student = { name: "Amina", age: 20, course: "Data Science" };
    console.log("Student:", student);

    const car = { brand: "Toyota", model: "Corolla", year: 2020 };
    console.log("Car:", car);

    const phone = { company: "Samsung", storage: "128GB", battery: "85%" };
    console.log("Phone:", phone);

    //constructer
    function Employee(name, salary, role) { this.name = name; this.salary = salary; this.role = role; }
    const emp = new Employee("Khalid", 5000, "Manager");
    console.log("Employee:", emp);

    function Product(name, price, inStock) { this.name = name; this.price = price; this.inStock = inStock; }
    const product = new Product("Laptop", 1200, true);
    console.log("Product:", product);

    function Book(title, author, pages) { this.title = title; this.author = author; this.pages = pages; }
    const book = new Book("JavaScript Basics", "John Doe", 250);
    console.log("Book:", book);

    console.log("===== ES6 Classes =====");
    class Teacher { constructor(name="Fatima", subject="Math", experience=5) { this.name = name; this.subject = subject; this.experience = experience; } }
    const teacher = new Teacher();
    console.log("Teacher:", teacher);

    class BankAccount { constructor(accountNumber, ownerName, balance) { this.accountNumber = accountNumber; this.ownerName = ownerName; this.balance = balance; } }
    const account = new BankAccount("AC12345", "Abdirahman", 3000);
    console.log("Bank Account:", account);

    class Animal { constructor(type, color, age) { this.type = type; this.color = color; this.age = age; } }
    const animal = new Animal("Cat", "White", 2);
    console.log("Animal:", animal);

    console.log("===== Access & Update =====");
    const laptopObj = { brand: "Dell", ram: "8GB", price: 700 };
    console.log("Original Laptop RAM:", laptopObj.ram);
    laptopObj.ram = "16GB";
    console.log("Updated Laptop RAM:", laptopObj.ram);

    const user = { username: "Ali2025", email: "ali@example.com", age: 22 };
    console.log("Old Email:", user.email);
    user.email = "ali.new@example.com";
    console.log("Updated Email:", user.email);

    const hotelRoom = { roomNumber: 105, price: 50, type: "Single" };
    console.log("Original Price:", hotelRoom.price);
    hotelRoom.price = 40;
    console.log("Updated Price:", hotelRoom.price);

    console.log("===== Add Properties =====");
    const myCar = { brand: "Honda", model: "Civic", year: 2019 };
    myCar.owner = "Omar";
    myCar["last-service-date"] = "2025-01-01";
    console.log("Car with new properties:", myCar);

    const myStudent = { name: "Maryam", grade: "A", school: "Afbara Academy" };
    myStudent.age = 18;
    myStudent["favorite-subject"] = "Physics";
    console.log("Student with new properties:", myStudent);

    const shopItem = { itemName: "Milk", price: 2, category: "Food" };
    shopItem.quantity = 30;
    shopItem["discount-percentage"] = 10;
    console.log("Shop item with new properties:", shopItem);

    console.log("===== Iterating Objects =====");
    const menu = { burger: 5, pizza: 8, juice: 3 };
    for (let item in menu) console.log(item + ": $" + menu[item]);

    const city = { population: 500000, mayor: "Hassan", area: "200 sq km" };
    for (let key in city) console.log(key + ": " + city[key]);

    const schedule = { math: "8:00 AM", english: "10:00 AM", science: "1:00 PM" };
    for (let subject in schedule) console.log(subject + ": " + schedule[subject]);

    console.log("===== JSON Conversion =====");
    const movie = { title: "Inception", duration: "2h 30m", rating: 9 };
    const movieJSON = JSON.stringify(movie);
    console.log("Movie JSON:", movieJSON);

    const jsonStr = '{"name":"Sara","age":25,"country":"Kenya"}';
    const objFromJSON = JSON.parse(jsonStr);
    console.log("Name:", objFromJSON.name);
    console.log("Age:", objFromJSON.age);
    console.log("Country:", objFromJSON.country);

    const weather = { temperature: 32, humidity: "70%", condition: "Sunny" };
    const weatherJSON = JSON.stringify(weather);
    const weatherObj = JSON.parse(weatherJSON);
    console.log("Weather Object:", weatherObj);
