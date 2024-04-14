// TASK 0  Напишите функцию sum(c,t), которая возвращает результат суммы c,t

function SUM(y, u) {
	return y + u;
}

var results = SUM(15, 15);
console.log(results);

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

function MIN(o, p) {
	return o < p;
}

var ReSult = MIN(3, 5);
console.log(ReSult);

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

function NUMber(num1, num2) {
	var message;
	if (num1 % 1 === 0) {
		message = "nechetnoe"
	} else if (num2 % 2 === 0) {
		message = "chetnoe"
	} else ("salam aleikum");
	return message;
};

var EvenNUM = NUMber(5, 6);
console.log(EvenNUM);

// TASK 4

// Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента
// и возвращать строку вида "rgb(23,100,134)".
// Если какой-либо из аргументов не задан: например, третий:
// мы вызываем функцию getColor(23,100), в таком случае мы должны
// получить строку "rgb(23,100,0)"

function getColor(r = 0, g = 0, b = 0) {
  return "rgb(" + r + ", " + g + ", " + b  + ")";
}
 
console.log(getColor(23, 100,));

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

function squareNumber(num) {
	return num*3;
};

sum = squareNumber(3);
console.log(sum);

function squareNumber(num) {
	num23 = 24;
	var random = prompt("Number 18 - 50:")
	if(num23 <= 50) {
		console.log(num23*2);
	}
		return "this is not a number";
};

squareNumber(num23);