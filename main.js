// TASK 0  Напишите функцию sum(c,t), которая возвращает результат суммы c,t

function SUM(y, u) {
	return y + u;
}


console.log(SUM(15, 15));

// ---

function Sum(c, t) {
	console.log(c + t);
};

Sum(30, 40);

function Sum(apple, banana) {
	console.log(apple + banana);
};

Sum(5, 10);

function Sum(car, garage) {
	console.log(car + garage);
}

Sum(3, 3);

// TASK 1   Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

// function MIN(o, p) {
// 	return o < p;
// }

// var ReSult = MIN(3, 5);
// console.log(ReSult);

//--- 

function Min(a, b) {
	if (a < b) {
		console.log(a + " is smaller");
	} else {
		console.log(b + " is bigger");
	};
};

Min(2, 6);

// Попробовал функцию min(a,b), которая возвращает большее из чисел a и b

function MiN(x, c) {
	return x > c;
}

var ReSUlt = MiN(15, 6);
console.log(ReSUlt);

//---

function Min(d, c) {
	if (d > c) {
		console.log(d + " is bigger");
	} else {
		console.log(c + " is smaller");
	};
};

Min(56, 35);

// TASK 2  Напишите функцию pow(x,n), которая возвращает x, в степени n

function pow(m, n) {
	return m ** n;
}

var result = pow(3, 3);
console.log(result);

//---

function Pow(x, n) {
	console.log(x ** n);
};

Pow(7, 2);

function poW(t, u) {
	console.log(t ** u);
};

poW(3, 3);

// TASK 3 Напишите функцию, которая принимает число, и возвращает строку "четное" или "нечетное".


function Namber(Nem) {
	if(Nem % 2 === 0) {
		return "chetnoe";
	} else if (Nem % 1 === 0) {
		return "necthone";
	};
};

console.log(Namber(4));

function NUMber(num) {
	if(num % 2 === 0) {
		return "четное"
	} else if (num % 1 === 0) {
		return "нечетное"
	};
};

console.log(NUMber(6));

//не обязательно результат функции закидывать в переменную и уже только после этого выводить в консоль

// TASK 4

// Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента
// и возвращать строку вида "rgb(23,100,134)".
// Если какой-либо из аргументов не задан: например, третий:
// мы вызываем функцию getColor(23,100), в таком случае мы должны
// получить строку "rgb(23,100,0)"

function getColor(r, g, b = 0) {
  return "rgb(" + r + ", " + g + ", " + b  + ")";
}
 
console.log(getColor(23, 100,134));
console.log(getColor(23,100,));
// TASK 5

// Сложение +,
// Вычитание -,
// Умножение *,
// Деление /,
// Взятие остатка от деления %,
// Возведение в степень **.

// Напишите 2 функции:

// Первая функция squareNumber(num) должна принимать число, и возвращать квадрат этого числа

// Вторая функция запрашивает у пользователя число от 18 до 50.
// Если пользователь ввел НЕ число, то сделайте ему одно замечание,
// если число, то вызовете функцию squareNumber передав в нее это самое число.
// Необходимо вывести результат пользователю (Либо замечание, либо квадрат числа) 

// Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.
// Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.

function squareNumber (num) {
	return num*num;
}
console.log(squareNumber(4));


var input = prompt("Number 18 to 50 :");

// изменили инпут на число
var answer = Number(input);

if(isNaN (answer)) {
		alert ("this is not a number");
} else (
	console.log(squareNumber(answer))
);
