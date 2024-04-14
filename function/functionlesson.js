// ФУНКЦИИ (СИНТАКСИС)
// FUNCTION - КЛЮЧЕВОЕ СЛОВО ОБАРАЧИВАЕТ ПОВТОРЯЮЩИЙСЯ КУСОЧЕК КОДА - ИМЯ ФУНК. - (ПАРАМЕТРЫ) {ТЕЛО ФУНК.}
// ЕСЛИ В КОДЕ МНОГО ПОВТОРЕНИЙ МОЖНО ПОЛОЖИТЬ ЭТО ВСЁ В ФУНК.

var BoyName = "Дима";
var BoyAge = 20;

if(BoyAge > 18) {
	console.log(BoyName + " Идёт в армию")
} else {
	console.log(BoyName + " Продолжает ходить в школу")
}

var BoyName2 = "Алекс"
var BoyAge2 = 16;

if(BoyAge2 > 18) {
	console.log(BoyName2 + " Идёт в армию")
} else {
	console.log(BoyName2 + " Продолжает ходить в школу")
}

var BoyName3 = "Артём"
var BoyAge3 = 24;

if(BoyAge3 > 18) {
	console.log(BoyName3 + " Идёт в армию")
} else {
	console.log(BoyName3 + " Продолжает ходить в школу")
}

// ПЕРЕВОД КОДА В FUNCTION. (ДЛЯ НЕ ПОВТОРЕНИЯ КОДА IF ELSE)
// name, age (параметры) их может быть бесконечное множество.
// ФУНК. ПРИНИМАЕТ ПАРАМЕТРЫ А ПЕРЕДАЁМ ЕЙ АРГУМЕНТЫ - (МОЖНО В КАЧЕСТВЕ АРГУМЕНТЫ ПЕРЕДАВАТЬ ПЕРЕМЕННЫЕ)

var BoyName = "Дима";
var BoyAge = 20;

var BoyName2 = "Алекс"
var BoyAge2 = 16;

var BoyName3 = "Артём"
var BoyAge3 = 24;

function checkAge(name, age) {
	if (age > 18) {
		console.log(name + " Идёт в армию")
	} else {
		console.log(name + " Продолжает ходить в школу")
	}
	
}

checkAge(BoyName, BoyAge);
checkAge(BoyName2, BoyAge2);
checkAge(BoyName3, BoyAge3);

// ФУНЦ. МОЖНО НАПИСАТЬ В ОДНОМ МЕСТЕ А ВЫЗЫВАТЬ В ДРУГОМ, БРАУЗЕР ВЫПОЛНИТ ЁЁ ТОЛЬКО КОГДА БУДЕМ ВЫЗЫВАТЬ
// НАЗВАНИЕ ФУНКЦ. SAYHELLO - ГОВОРИТ ХЕЛЛО - ФУНК. ЧТО ТО ДЕЛАЕТ - ОНА ПРИНИМАЕТ ОТ НАС НЕКИЕ ПАРАМЕТРЫ
// ЗАДАЁМ ВОПРОС ЧТО ФУНК. ДЕЛАЕТ ИЛИ ЧТО ДЕЛАТЬ ?	AYHELLO - ГОВОРИТ ХЕЛЛО.

function sayHello(name) {
	console.log("Hello " + name);
}

sayHello("Андрей");
sayHello("Артём");

//  КОГДА ОПРЕДЕЛЯЕМ ФУНКЦИЮ, ТО ЗАДАЁМ ЕЙ ПАРАМЕТРЫ, КОГДА ВЫЗЫВАЕМ ТУ ФУНКЦИЮ ЗАДАЁМ АРГУМЕНТЫ
//ВО ВНУТРЬ ФУНКЦИИ МОЖНО ПЕРЕДАВАТЬ ЛЮБОЙ ТИП ДАННЫХ 

function SendProfileStudent (name,age,mark,wish) {
	if(wish) {
		console.log (
			"Ученик(ца) , с именем " + name + "\n" +
			"C возрастом " + age + " лет" + "\n" +
			"Со среднем баллом" + mark
		);
	}
}

SendProfileStudent("Юля ", 18, 4.23 , true );
SendProfileStudent("Олег ", 23, 3.70 , true );

function SendMessage(author,text) { //- параметры
	console.log(
		// принимает параметры (ТЕЛО ФУНКЦИИ)
	)
}

SendMessage("Алексей, another text"); //АРГУМЕНТЫ

// КОГДА ПЕРЕКИДЫВАЕМ АРГУМЕНТ В ПАРАМЕТР ФУНКЦИИ ТО ПЕРЕМЕННАЯ НЕ МЕНЯЕТСЯ ОНА КОПИРУЕТСЯ
//ТАК ОРГАНИЗОВЫВАЕТСЯ ПЕРЕДАЧА АРГУМЕНТА В ФУНКЦИЮ

function doIt(param) {
	param = 2;
};

var test = 1;
doIt(test);
console.log(test); //1

function MakeDrink(nameOfDrink, count) {
	console.log("Need to do " + nameOfDrink + " for " + count + " people !");
};

// ЕСЛИ НЕ ВПИСАТЬ АРГУМЕНТ ТО ВЫДАСТ UNDEFINED

MakeDrink("Coffee", 3);
MakeDrink("Tea, 10", 3);
MakeDrink("Bloody Marry", 6);

// КОМАНДА RETURN БЕЗ CONSOLE LOG ПРИ ПОМОЩИ ПЕРЕМЕННОЙ MESSAGE

function CheckYourCar(speed) {
	var message;
	if(speed > 300) {
		message = "Your car is fast"
	} else if (speed > 100 && speed < 300) {
		message = "Car is good, but not like a Timati";
	} else {
		message = "Car is not good, my bycicle is faster";
	}
	return message;
}

// ЗАПИСЫВАЕМ ВЕСЬ МИР ФУНКЦИИ В ПЕРЕМЕННУЮ MESSAGE

var StatusCar = CheckYourCar(210);
console.log(StatusCar);

// КОМАНДА RETURN ВОЗВРАЩАЕТ КАКОЙ ТО РЕЗУЛЬТАТ ВЫПОЛНЕНИЯ ФУНКЦИИ,
// ПОСЛЕ ТОГО КАК ФУНКЦИЯ ЧТО ТО ВОЗВРАЩАЕТ ОНА ПЕРЕСТАЁТ РАБОТАТЬ (код дальше читаться не будет)

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.

function Summ(x,y) {
	return x + y;
}

// ПЕРЕМЕННАЯ УДОБНАЯ ДЛЯ ФУНКЦИИ ТЕМ ЧТО ПОЛЬЗОВАТЬСЯ РАЗНЫМИ АРГУМЕНТАМИ

// var result = Summ(20,10);
// var result1 = Summ(30,5);
// console.log(result, result1);
// console.log(result1);

function num() {
	return "Hello";
}

var resuls = num();
console.log(resuls);

//ЕСЛИ ЕСТЬ RETURN ОБЯЗАТЕЛЬНО ИСПОЛЬЗОВАТЬ ПЕРЕМЕННУЮ ЧТОБЫ ПРИРОВНЯТЬ ЕЁ В РЕЗУЛЬТАТЕ ФУНКЦИИ

var userName = "dima";

function changeUserName() {
	userName = "Aleksey";
	var msg = " Hello " + userName;
	console.log(msg);
}

changeUserName();
console.log(userName);

// переменная видна только локально внутри функции внутри фигурных скобок и в наружу мы вернуть не можем
// userName перезаписался на строчке 168

var color = "green";

function sendColor() {
	var color = "red";
	console.log(color);
}

sendColor();

// приоритетнее локальная переменная внутри функции
// так происходит глобальная переходит в локальную пемеренную

var money = 300;

buyVegetables();

function buyVegetables() {
	var priceTomato = 50;
	var pricePotato = 100;
	var priceMilk = 60;
	money = money - priceTomato - pricePotato - priceMilk;
	return money; 
}

console.log(money);



var Color = "blue";

function ChangeColor() {
	var Color = "dark";
	console.log(Color);
};

ChangeColor();
console.log(Color);

// 209 СТРОКА ПОЛУЧИЛИ ЗНАЧЕНИЕ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ
// 204 СТРОКА ПОЛУЧИЛИ ЗНАЧЕНИЕ ЛОКАЛЬНОЙ ПЕРЕМЕННОЙ