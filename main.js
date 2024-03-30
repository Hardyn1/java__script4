// ФУНКЦИИ (СИНТАКСИС)
// FUNCTION - КЛЮЧЕВОЕ СЛОВО ОБАРАЧИВАЕТ ПОВТОРЯЮЩИЙСЯ КУСОЧЕК КОДА - ИМЯ ФУНК. - (ПАРАМЕТРЫ) {ТЕЛО ФУНК.}
// ЕСЛИ В КОДЕ МНОГО ПОВТОРЕНИЙ МОЖНО ПОЛОЖИТЬ ЭТО ВСЁ В ФУНК.

// var BoyName = "Дима";
// var BoyAge = 20;

// if(BoyAge > 18) {
// 	console.log(BoyName + " Идёт в армию")
// } else {
// 	console.log(BoyName + " Продолжает ходить в школу")
// }

// var BoyName2 = "Алекс"
// var BoyAge2 = 16;

// if(BoyAge2 > 18) {
// 	console.log(BoyName2 + " Идёт в армию")
// } else {
// 	console.log(BoyName2 + " Продолжает ходить в школу")
// }

// var BoyName3 = "Артём"
// var BoyAge3 = 24;

// if(BoyAge3 > 18) {
// 	console.log(BoyName3 + " Идёт в армию")
// } else {
// 	console.log(BoyName3 + " Продолжает ходить в школу")
// }

// ПЕРЕВОД КОДА В FUNCTION. (ДЛЯ НЕ ПОВТОРЕНИЯ КОДА IF ELSE)
// name, age (параметры) их может быть бесконечное множество.
// ФУНК. ПРИНИМАЕТ ПАРАМЕТРЫ А ПЕРЕДАЁМ ЕЙ АРГУМЕНТЫ - (МОЖНО В КАЧЕСТВЕ АРГУМЕНТЫ ПЕРЕДАВАТЬ ПЕРЕМЕННЫЕ)


// var BoyName = "Дима";
// var BoyAge = 20;

// var BoyName2 = "Алекс"
// var BoyAge2 = 16;

// var BoyName3 = "Артём"
// var BoyAge3 = 24;

// function checkAge(name, age) {
// 	if (age > 18) {
// 		console.log(name + " Идёт в армию")
// 	} else {
// 		console.log(name + " Продолжает ходить в школу")
// 	}
	
// }

// checkAge(BoyName, BoyAge);
// checkAge(BoyName2, BoyAge2);
// checkAge(BoyName3, BoyAge3);

// ФУНЦ. МОЖНО НАПИСАТЬ В ОДНОМ МЕСТЕ А ВЫЗЫВАТЬ В ДРУГОМ, БРАУЗЕР ВЫПОЛНИТ ЁЁ ТОЛЬКО КОГДА БУДЕМ ВЫЗЫВАТЬ
// НАЗВАНИЕ ФУНКЦ. SAYHELLO - ГОВОРИТ ХЕЛЛО - ФУНК. ЧТО ТО ДЕЛАЕТ - ОНА ПРИНИМАЕТ ОТ НАС НЕКИЕ ПАРАМЕТРЫ
// ЗАДАЁМ ВОПРОС ЧТО ФУНК. ДЕЛАЕТ ИЛИ ЧТО ДЕЛАТЬ ?	AYHELLO - ГОВОРИТ ХЕЛЛО.

// function sayHello(name) {
// 	console.log("Hello " + name);
// }

// sayHello("Андрей");
// sayHello("Артём");