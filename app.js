// 1. Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у. 
let x = 1; 
let y = 2;
let res1 ="" + x + y;// Допишіть код, необхідно використовувати змінні x і y 
console.log(res1); // "12" 
console.log(typeof res1); // "string" 

let res2 = "" + !!x + y// Допишіть код, необхідно використовувати змінні x і y 
console.log(res2); // "true2" 
console.log(typeof res2); // "string" 

let res3 = !!x || y// Допишіть код, необхідно використовувати змінні x і y 
console.log(res3); // true 
console.log(typeof res3); // "boolean" 

let res4 = x.isNaN + y// Допишіть код, необхідно використовувати змінні x і y 
console.log(res4); // NaN 
console.log(typeof res4); // "number" 

// 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число 
let userInput = prompt("Please enter your number");
let resultPositiveOrNegative;
let resultOddOrEven;
let resultMultipleToSeven;
// a) парним додатним; 
// b) кратним числу 7. 
// Результат перевірки вивести в консоль.  
if (!isNaN(userInput) && userInput != 0){
    function positiveOrNegative (number){
        return resultPositiveOrNegative = number > 0 ? "positive" : "negative";
    }
    function oddOrEven (number){
        return resultOddOrEven = number%2 == 0 ? "odd" : "even";
    }
    function multipleToSeven (number){
        return resultMultipleToSeven = number%7 == 0 ? "multiple to seven" : "not multiple to seven";
    }
    console.log("Your number is %s and %s and %s", positiveOrNegative(userInput), oddOrEven(userInput), multipleToSeven(userInput));
} else {
    console.log("Your input is 0 or not a number, and that's all what I can do with it");
}

// 3. Створіть порожній масив; 
// 1) У перший елемент масиву запишіть будь-яке число; 
// 2) У другий елемент масиву запишіть будь-який рядок; 
// 3) У третій елемент масиву запишіть будь-яке логічне значення; 
// 4) У четвертий елемент масиву запишіть значення null; 
let array = [1, "Vitalii", true, null];
// 5) Виведіть на екран число елементів, яке зберігається в масиві; 
console.log("Array length is ",array.length);
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву; 
array.push(prompt("Please add something to the array"));
// 7) Виведіть на екран п'ятий елемент масиву. 
console.log("Fifth element of the array is ",array[4]);
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.
array.shift();
console.log(array);

// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”. 
// Початковий масив: 
let cities = ["Rome", "Lviv", "Warsaw"];  
// Результуючий масив: 
// "Rome*Lviv*Warsaw" 
let resultLine = "";
cities.forEach(element => {
    resultLine = resultLine + element;
    if (element != cities.at(-1)){
        resultLine += "*";
    } else {
        return resultLine;
    }
}); 
console.log(resultLine);

// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
let isAdult = confirm("Are you 18 or more years old?");
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
// Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 10 років вивести “Ви ще надто молоді”
if (isAdult){
    console.log("You are over 18 years old");
} else {
    console.log("You are too young");
}

// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони). 
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.  
let triangleSideA = prompt("Enter triangle side A");
if (!isNaN(triangleSideA) && triangleSideA != 0){
triangleSideA = parseFloat(triangleSideA);
} else {
    alert("Incorrect data");
}
let triangleSideB = prompt("Enter triangle side B");
if (!isNaN(triangleSideB) && triangleSideB != 0){
    triangleSideB = parseFloat(triangleSideB);
    } else {
        alert("Incorrect data");
    }
let triangleSideC = prompt("Enter triangle side C");
if (!isNaN(triangleSideC) && triangleSideC != 0){
    triangleSideC = parseFloat(triangleSideC);
    } else {
        alert("Incorrect data");
    }
let tiangleBase;
let triangleType;
// Необхідно  
// a) визначити і вивести в консоль площу трикутника 
let halfPerimeter = 0.5*(triangleSideA + triangleSideB + triangleSideC);
console.log(halfPerimeter); 
let areaOfTriangle = Math.sqrt(halfPerimeter*(halfPerimeter - triangleSideA)*(halfPerimeter - triangleSideB)*(halfPerimeter - triangleSideC));
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). 
console.log(areaOfTriangle.toFixed(3));
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки. 
function typeOfTriangle (baseSide, aSide, bSide){
    if (Math.pow(baseSide, 2) == (Math.pow(aSide, 2) + Math.pow(bSide, 2))){
        return triangleType = "Right triangle"; 
    } else if (Math.pow(baseSide, 2) < Math.pow(aSide, 2) + Math.pow(bSide, 2)){
        return triangleType = "Versatile triangle \nAcute-angled triangle";
    } else if (baseSide == aSide && baseSide == bSide) {
        return triangleType = "Equilateral triangle \nAcute-angled triangle";
    } else {
        return triangleType = "Versatile triangle \nObtuse triangle";
    }
}
if (triangleSideA >= triangleSideB && triangleSideA >= triangleSideC && triangleSideA < (triangleSideB + triangleSideC)){
    console.log(typeOfTriangle(triangleSideA, triangleSideB, triangleSideC));
} else if (triangleSideB >= triangleSideA && triangleSideB >= triangleSideC && triangleSideB < (triangleSideA + triangleSideC)){
    console.log(typeOfTriangle(triangleSideB, triangleSideA, triangleSideC));
} else if (triangleSideC >= triangleSideA && triangleSideC >= triangleSideB && triangleSideC < (triangleSideA + triangleSideB)){
    console.log(typeOfTriangle(triangleSideC, triangleSideA, triangleSideB));
} else {
    console.log("Triangle does not exist");
}

// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи.
//  Зробити 2 способами через 2 різних умовних оператора. 
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі” 
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку” 
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня” 
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. 
let dateNow = new Date();
let hours = hours;
if (hours <= 5 || hours >= 23){
    console.log("Good night");
} else if (hours > 5 && hours <= 11){
    console.log("Good morning");
} else if (hours > 11 && hours <= 17){
    console.log("Good afternoon");
} else if (hours > 17 && hours < 23){
    console.log("Good evening");
} else {
    console.log("Not a valid time");
}

switch (true) {
    case hours <= 5 ||  hours >= 23:
        console.log("Good night");
        break;
    case hours > 5 && hours <= 11:
        console.log("Good morning");
        break;
    case hours > 11 && hours <= 17:
        console.log("Good afternoon");
        break;
    case hours > 17 && hours < 23:
        console.log("Good evening");
        break;
    default:
        console.log("Not a valid time");
}