cart=["Milk","Bread","Eggs"]
cart.push("Butter")
cart.shift()
cart.unshift("Juice")
console.log(cart)

prices=[10,20,30,40]
updatedPrice=prices.map((price)=>price+(price*0.15))
console.log(`The old price is ${prices}`)
console.log(`The new price is ${updatedPrice}`)


function printTable(num){
    for (i=1; i<=10; i++){
       times=num*i
        console.log(`${num}*${i}=${times}`)
     }
 }
printTable(7)

function product(productName,price,inStock){
    this.productName=productName,
    this.price=price
    this.inStock=inStock
}
product1= new product("Laptop",1200, true)
console.log(product1)
product2= new product("Gold",16600, false)
console.log(product2)
 product3= new product("shirt",100, true)
console.log(product3)





class BankAccount{
    constructor(name,accountNumber,balance){
         this.accountNumber=accountNumber,
        this.name=name,
        this.balance=balance,
        this.deposit=function (){
             let amount=parseInt(prompt("Enter the amount you want to deposit: "))
           this.balance+=amount
         alert(`wadku guuleystey lacag dhigashada, Haragagu cusub waa $${this.balance}`)
        }
    }
}
customer1=new BankAccount("ALI","AG1234",600)
customer1.deposit();
//  alert(`wadku guuleystey lacag dhigashada, Haragagu cusub waa $${customer1.deposit}`);


laptop={
brand:"Dell",
ram:"8GB",
price:700
}
console.log(laptop)
laptop.ram="16GB"
console.log(laptop)

userProfile={
   usename:"Ali2025",
   email:"ali@gmail.com",
   age:22
}
console.log(userProfile.email)
userProfile.email="ali.new@example.com"
console.log(userProfile.email)

hotelRoom={
    roomnumber:105,
    price:50,
    type:"single"
}
console.log(hotelRoom.price)
hotelRoom.price=40
console.log(hotelRoom.price)

car={
    brand:"Honda",
    model:"civic",
    year:2019
}
car.owner="Omar"
car[last-service-date]="2025-01-01"
console.log(car)
shop={
    itemName:"Milk",
    price:2,
    category:"food"
}
shop.quantity=30
shop[discount-percentage]=10
console.log(shop)

restaurant={
    burger:5,
    pizza:8,
    juice:3
}
for (let key in restaurant){
console.log(key +":"+restaurant.key)
}

cityInformation={
    population:500000,
    mayor:"Hassan",
    area:"200 sq km"
}
for (key in cityInformation){
    console.log(key+":"+cityInformation.key)
}






 menu = {
  burger: 5,
  pizza: 8,
  juice: 3
};

for (let item in menu) {
  console.log(item + ": " + menu[item]);
}




city = {
  population: 500000,
  mayor: "Hassan",
  area: "200 sq km"
};

for (let key in city) {
  console.log(key + ": " + city[key]);
}


schedule = {
  math: "8:00 AM",
  english: "10:00 AM",
  science: "1:00 PM"
};

for (let subject in schedule) {
  console.log(subject + ": " + schedule[subject]);
}



movie = {
  title: "Inception",
  duration: "2h 30m",
  rating: 9
};

movieJSON = JSON.stringify(movie);
console.log(movieJSON);


jsonString = {
"name":"Sara",
"age":25,
"country":"Kenya"
}

obj = JSON.parse(jsonString);

console.log(obj.name);
console.log(obj.age);
console.log(obj.country);




 weather = {
  temperature: 32,
  humidity: "70%",
  condition: "Sunny"
};

weatherJSON = JSON.stringify(weather);  // convert to JSON
backToObject = JSON.parse(weatherJSON); // convert back

console.log(backToObject);
