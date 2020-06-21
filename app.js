 // ..............(Chapter 21-25 ).......................//

// ................task#1.........................//

// var firstName = prompt("Enter your first name", "");
// var lastName = prompt("Enter youe last name", "");
// var fullName = (firstName + " " + lastName);
// for (var i = 0; i <=1; i++){
//     alert("Hello" + " " + fullName);
//     break;
// }

// ...............task#2........................//

// var favoritePhone = ("My favorite phone is: ");
// document.write(favoritePhone);

// var favoritePhoneInput = prompt("Enter your favorite phone", "");
// document.write(favoritePhoneInput);

// var lengthOfString = ("<br>" + "Length of string: ");
// document.write(lengthOfString);

// var lengthOfInput = favoritePhoneInput.length;
// document.write(lengthOfInput);

// ...............task#3........................//

// var string = ("String: ");
// document.write(string);
// var letter = "Pakistani";
// document.write(letter);

// var index = ("<br>" + "Index of 'n': ");
// document.write(index);
// document.write(letter.indexOf("n"));


// ...............task#4........................//

// var string = ("String: ");
// document.write(string);
// var letter = "Hello World";
// document.write(letter);

// var index = ("<br>" + "Last index of 'l': ");
// document.write(index);
// document.write(letter.lastIndexOf("l"));

// ...............task#5........................//

// var string = ("String: ");
// document.write(string);
// var letter = "Pakistani";
// document.write(letter);

// var index = ("<br>" + "Character at index 3: ");
// document.write(index);
// document.write(letter.charAt(3));

// ...............task#6........................//

// var firstName = prompt("Enter your first name", "");
// var lastName = prompt("Enter youe last name", "");
// var fullName = (firstName + " " + lastName);
// for (var i = 0; i <=1; i++){
//     alert("Hello" + " " + fullName);
//     break;
// }

// ...............task#7........................//

// var city = ("City: ");
// document.write(city);
// var city = ("Hyderabad");
// document.write(city);
// var afterReplacing = ("<br>" + "After replacing: ");
// document.write(afterReplacing);
// var replaceCity = city.replace("Hyder", "Islam");
// document.write(replaceCity);

// ...............task#8........................//

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var replaceMessage = message.replace(/and/g, "&");
// document.write(replaceMessage);

// ...............task#9........................//

// var value = ("Value: ");
// document.write(value);
// var number = 472;
// var string = number.toString();
// document.write(string);
// var type = ("<br>" + "Type: string");
// document.write(type);

// var value = ("<br>" + "Value: ");
// document.write(value);
// var string = "472";
// var number = Number(string);
// document.write(number);
// var type = ("<br>" + "Type: number");
// document.write(type);

// ...............task#10........................//

// var userInput = ("User input: ");
// document.write(userInput);
// var inputType = prompt("Something write", "");
// document.write(inputType);
// var upperCase = ("<br>" + "Upper case: ");
// document.write(upperCase);
// change = inputType.toUpperCase();
// document.write(change);

// ...............task#11........................//






// ...............task#12........................//

// var value = ("Number: ");
// document.write(value);
// var number = 35.36;
// var string = number.toString().replace(".", "");
// document.write(string);

// ...............task#13........................//




// ...............task#14........................//

// var bakery = prompt("Welcome to Javascript practice bakery. What do you want to order sir/ma'am?", "");
// convert = bakery.toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= 4; i++){
//     if(convert === "cake"){
//         document.write("Cake is available at index " + items.indexOf("cake"));
//         break;
//     }
//     else if(convert === "apple pie"){
//         document.write("apple pie is available at index " + items.indexOf("apple pie"));
//         break;
//     }
//     else if(convert === "cookie"){
//         document.write("cookie is available at index " + items.indexOf("cookie"));
//         break;
//     }    
//     else if(convert === "chips"){
//         document.write("chips is available at index " + items.indexOf("chips"));
//         break;
//     }
//     else if(convert === "patties"){
//         document.write("patties is available at index " + items.indexOf("patties"));
//         break;
//     }
//     else{
//         document.write("we are sorry. " + bakery + " is not available our bakery");
//         break;
//     }
// }

// ...............task#15........................//

// var inputPassword = prompt("Enter password\nIt contains alphabets,numbers and should at least 6 character long and should not start with a number\nFor character codes of a-z, A-Z & 0-9", "");
// document.write("Entered password: " + inputPassword);


// ...............task#16........................//



// ...............task#17........................//






// ......................(Chapter 26-30).....................//

// ........................task#1...........................//

// var number = prompt("Enter a positive integer", "");
// document.write("Number: " + number);
// round = Math.round(number);
// document.write("<br>" + "Round off value: " + round); 
// floor = Math.floor(number);
// document.write("<br>" + "Floor value: " + floor);
// ceil = Math.ceil(number);
// document.write("<br>" + "Ceil value: " + ceil);


// ........................task#2...........................//

// var number = prompt("Enter a negative floating point", "");
// document.write("Number: " + number);
// round = Math.round(number);
// document.write("<br>" + "Round off value: " + round); 
// floor = Math.floor(number);
// document.write("<br>" + "Floor value: " + floor);
// ceil = Math.ceil(number);
// document.write("<br>" + "Ceil value: " + ceil);

// ........................task#3...........................//

// var absoluteValue = ("Absolute value of -9 is " + "9");
// document.write(absoluteValue);

// ........................task#4...........................//

// var randomDice = Math.random(); 
// var randomDice1 = (randomDice * 6) + 1; 
// var randomDice2 = Math.floor(randomDice1);
// document.write("random dice value: " + randomDice2);
// document.write("<br>" + "random dice value: " + randomDice2);

// ........................task#5...........................//

// var randomCoin = Math.random();
// var randomCoin1 = (randomCoin * 2) + 1;
// var randomCoin2 = Math.floor(randomCoin1);
// document.write(randomCoin2);
// if(randomCoin2 === 2){
//     document.write("<br>" + "random coin value: " + "Heads");
// }
// if(randomCoin2 !== 2){
//     document.write("<br>" + "random coin value: " + "Tails");
// }

// ........................task#6...........................//

// var randomNumber = Math.random();
// var randomNumber1 = (randomNumber * 100) + 1;
// var randomNumber2 = Math.floor(randomNumber1);
// document.write("random number between 1 and 100: " + randomNumber2);

// ........................task#7...........................//

// var userWeight = prompt("Enter your weight in kilorgams", "");
// userWeight.toLowerCase();
// if (userWeight === userWeight){ 
//     document.write("The weight of user is " + userWeight + " kilograms");
// }
// else if (userWeight === userWeight + kilograms){
//     document.write("The weight of user is " + userWeight);
// }
// else if (userWeight === userWeight + kgs){
//     document.write("The weight of user is " + userWeight);
// }


// ........................task#8...........................//

// var randomNumber = Math.random(8);
// var randomNumber1 = (randomNumber * 10) + 1;
// var randomNumber2 = Math.floor(randomNumber1);
// var inputNumber = prompt("Enter a number between 1 to 10", "");
// if(inputNumber === randomNumber2){
//     alert("Congratulations!");
// }
// else {
//     alert("Try again!")
// }





// ......................Chapter (31-34).....................//

// .........................task#1..............................//

// var date = new Date();
// document.write(date);

// .........................task#2..............................//

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = monthNames[month];
// alert("Current month: " + currentMonth);

// .........................task#3..............................//

// var weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// var week = weekNames[day];
// alert(week);

// .........................task#4..............................//

// var weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// var week = weekNames[day];
// if (week === "Sat" || week === "Sun"){
//     alert("It's Fun day");
// }
// else {
//     alert(week);
// }

// .........................task#5..............................//

// var date = new Date();
// var date1 = date.getDate();
// if (date1 <= 15){
//     alert("First fifteen days of the month");
// }
// else {
//     alert("Last days of the month"); 
// }

// .........................task#6..............................//

// var date = new Date();
// document.write("Current Date: " + date);
// var milliseconds = date.getTime();
// document.write("<br>" + "Elapsed milliseconds since January" +  1 + ", " + 1970 + ": " + milliseconds);
// var minutes = milliseconds / (1000 * 60 * 60);
// document.write("<br>" + "Elapsed minutes since January" +  1 + ", " + 1970 + ": " + minutes);

// .........................task#7..............................//

// var date = new Date();
// var getHours = date.getHours();
// if(getHours < 12 ){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// .........................task#8..............................//

// var date = new Date("December 31, 2020 00:00:00");
// document.write(date);

// .........................task#9..............................//


// .........................task#10..............................//



// .........................task#11..............................//



// .........................task#12..............................//



// .........................task#13..............................//




// .........................task#14..............................//



// ............................Chapter (35-38)..........................//

// .........................task#1..............................//

// var date = new Date();
// functionDate(date);

// function functionDate(date) { 
//     alert(date); 
// }

// .........................task#2..............................//

// var firstName = prompt("Enter your first name", "");
// var lastName = prompt("Enter youe last name", "");
// var fullName = (firstName + " " + lastName);
// functionName(fullName);

// function functionName(fullName) {
//     alert("Hello," + fullName);
// }

// .........................task#3..............................//

// var num1 = +prompt("Enter first number", "");
// var num2 = +prompt("Enter second number", "");
// var sumNum = (num1 + num2);
// functionNumber(sumNum);

// function functionNumber(sumNum) {
//     alert(sumNum);
// }

// .........................task#4..............................//


// function addNumbers() { 
//   alert(num + num1);
// }

// var num = 2;
// var num1 = 3;
// addNumbers();


