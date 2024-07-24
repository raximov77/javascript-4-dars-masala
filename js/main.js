
/* 1-masala */

/* let number = prompt("Iltimos, 3 xonali son kiriting:");

if (number.length !== 3 || isNaN(number)) {
    console.log("Iltimos, 3 xonali son kiriting.");
} 
else {
    let firstDigit = parseInt(number.charAt(0));

    let secondDigit = parseInt(number.charAt(1));

    let thirdDigit = parseInt(number.charAt(2));

    let sum = firstDigit + thirdDigit;

    let difference = sum - secondDigit;

    console.log(`1- va 3-xonadagi sonlar yig'indisi: ${sum}`);
    console.log(`Bu yig'indi 2-xonadagi sondan ${difference} ga katta.`);
} */


/* 2-masala */  

/* let number = parseInt(prompt("Iltimos, son kiriting:"));

function calculateDivisorsSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

if (isNaN(number) || number <= 0) {
    console.log("Iltimos, musbat butun son kiriting.");
} 
else {
    let result = calculateDivisorsSum(number);
    console.log(`1 dan ${number} gacha bo'lgan sonlarning ichida ${number} ning bo'luvchilari yig'indisi: ${result}`);
} */

/* 3-masala */

/* let array = [true, "Salom", 23, undefined];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
        array[i] = null;
    }
}
console.log(array); */

/* 4-masala */

/* let array = [2, 3, 4, 52, 2, 3, 4, 53, 2, 23, 43, 2];
let maxValue = Math.max(...array);

console.log(`Arraydagi eng katta qiymat: ${maxValue}`); */

/* 5-masala */

/* let array = [54, 32, 76, 12, 22];
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Arraydagi qiymatlar yig'indisi: ${sum}`); */

/* 7-masala */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array[i] = 0;
    }
}

console.log(array); */

/* 8-masala */

/* let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
let operation = prompt("Amalni kiriting (+, -, *, /):");

function calculator(num1, num2, operation) {
    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Bo'lish xatosi: 0 ga bo'lish mumkin emas!";
            }
            break;
        default:
            result = "Noto'g'ri amal kiritildi!";
            break;
    }

    return result;
}

let result = calculator(num1, num2, operation);
console.log(`Natija: ${result}`); */

/* 9-masala */

/* let names = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];
let inputName = prompt("Ismingizni kiriting:");

if (names.includes(inputName)) {
    console.log(`${inputName} ismli shaxs array ichida bor.`);
} 
else {
    console.log(`${inputName} ismli shaxs array ichida yo'q.`);
} */

/* 10-masala */

/* let data = [
    {
        id: 1,
        age: 20,
        name: "Nuriddin",
        gmail: "nuriddin@gmail.com"
    },
    {
        id: 2,
        age: 15,
        name: "Komiljon",
        gmail: "komiljon@gmail.com"
    },
    {
        id: 3,
        age: 25,
        name: "Izzatbek",
        gmail: "Izzatbek@gmail.com"
    }
];

let inputName = prompt("Ismingizni kiriting:");
let person = data.find(entry => entry.name === inputName);

if (person) {
    console.log("Ma'lumotlar:", person);
} else {
    console.log("Berilgan ism bilan ma'lumotlar topilmadi.");
} */

/* 11-masala */

/* const people = [
    {
        id: 1,
        age: 20,
        name: "Nuriddin",
        gmail: "nuriddin@gmail.com"
    },
    {
        id: 2,
        age: 15,
        name: "Komiljon",
        gmail: "komiljon@gmail.com"
    },
    {
        id: 3,
        age: 25,
        name: "Izzatbek",
        gmail: "Izzatbek@gmail.com"
    }
];

const oldestPerson = people.reduce((oldest, current) => {
    return (current.age > oldest.age) ? current : oldest;
}, people[0]);

console.log(`Eng katta yoshga ega shaxs: ${oldestPerson.name}, Yosh: ${oldestPerson.age}`); */

/* 12-masala */

/* let people = [
    {
        id: 1,
        age: 20,
        name: "Nuriddin",
        gmail: "nuriddin@gmail.com"
    },
    {
        id: 2,
        age: 15,
        name: "Komiljon",
        gmail: "komiljon@gmail.com"
    },
    {
        id: 3,
        age: 25,
        name: "Izzatbek",
        gmail: "Izzatbek@gmail.com"
    }
];

function calculateAverageAge(persons) {
    let totalAge = 0;
    for (let person of persons) {
        totalAge += person.age;
    }

    let averageAge = totalAge / persons.length;

    return averageAge;
}

let averageAge = calculateAverageAge(people);
console.log(`Yoshlarning ortacha arifmetik qiymati: ${averageAge}`); */

/* 13-masaala */

/* let array = [23, 54, 21, 76, 23, 87];
let firstValue = array[0];
let lastValue = array[array.length - 1];
let sum = firstValue + lastValue;

if (sum % 2 === 0) { 
    array.unshift(sum);
} 
else { 
    array.push(sum);
}

console.log(array); */

/* 14-masala */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
    } else {
        oddNumbers.push(array[i]);
    }
}

console.log("Juft sonlar:", evenNumbers);
console.log("Toq sonlar:", oddNumbers); */

/* 15-masala */

/* let array = [8, 7, 6, 5, 4];
let reversedArray = [];

for (let element of array) {
    reversedArray.unshift(element);
}

console.log(reversedArray);
 */

