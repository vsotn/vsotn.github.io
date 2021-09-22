// Practical task 3 
// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while. 
let arrayOfNumbers = [2,3,4,5,6];
let sumOfNumberFromArray = 0;
let sumOfNumberFromWhile = 0;
arrayOfNumbers.forEach(element => {
    sumOfNumberFromArray += element;
});
console.log(sumOfNumberFromArray);

while(arrayOfNumbers.length > 0){
    sumOfNumberFromWhile += arrayOfNumbers.shift();
}
console.log(sumOfNumberFromWhile);

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і 
// відображатиме повідомлення на екрані. 
for (let index = 0; index <= 15; index++) {
    if(index%2 == 0){
        console.log(index + " is even");
    } else {
        console.log(index + " is odd");
    }
}
 

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500. 
// Sample Output: 
// randArray(5);  // 399,310,232,379,40
let randArray = [];
function fillArrayWithRandomNumbers (k){
   randArray = Array(k).fill().map(() => Math.round(Math.random()*500));
}
fillArrayWithRandomNumbers(5);
console.log(randArray.toString());

// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. 
// Реалізувати інтерфейс введення чисел a, b з клавіатури. 
// Sample Output: 
// raiseToDegree(3, 4);  // 81
function raiseToDegree(a,b){
    let c = 1;
    while (b > 0){
        c = c * a;
        b--;
        if (b == 0){
            return console.log(c);
        }
    }
}
raiseToDegree(prompt("Number a"),prompt("Number b"));

// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments. 
// Sample Output: 
// findMin(12, 14, 4, -4, 0.2); // => -4
function findMin(){
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[0] >= arguments[index]){
            arguments[0] = arguments[index];
        }        
    }
    return console.log(arguments[0]);
}
findMin(12, 14, 4, -4, 0.2);

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false. 
// Sample Output: 
// findUnique([1, 2, 3, 5, 3]);  // => false 
// findUnique([1, 2, 3, 5, 11]); // => true 
function findUnique(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                return console.log(false);
            }
        }        
    } return console.log(true);
}
findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]); 

// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, 
// що відповідає кількості 'х' останніх елементів масиву, які треба вивести. 
// Sample Output: 
// console.log(lastElem([3, 4, 10, -5]));      // -5 
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5] 
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
function lastElem(array, howManySymbolsToShow = 1){
    if (howManySymbolsToShow === 1){
        return array.pop();
    } else if (howManySymbolsToShow > array.length){
        return array;
    } else {
        return array.splice(howManySymbolsToShow);
    }
}  
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));
console.log(lastElem([3, 4, 10, -5],8));

// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр. 
// Input string: 'i love java script'  
// Output string: 'I Love Java Script'  
function upToUpperCase(inputString){
    let arrayOfSrings = inputString.split(" ");
    for (let index = 0; index < arrayOfSrings.length; index++) {
        arrayOfSrings[index] = arrayOfSrings[index].charAt(0).toUpperCase() + arrayOfSrings[index].slice(1);        
    }    
    let resultLine = arrayOfSrings.join(" ");
    console.log(resultLine);
}
upToUpperCase("i love java script");