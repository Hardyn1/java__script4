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



//  КОГДА ОПРЕДЕЛЯЕМ ФУНКЦИЮ, ТО ЗАДАЁМ ЕЙ ПАРАМЕТРЫ, КОГДА ВЫЗЫВАЕМ ТУ ФУНКЦИЮ ЗАДАЁМ АРГУМЕНТЫ
//ВО ВНУТРЬ ФУНКЦИИ МОЖНО ПЕРЕДАВАТЬ ЛЮБОЙ ТИП ДАННЫХ 

// function SendProfileStudent (name,age,mark,wish) {
// 	if(wish) {
// 		console.log (
// 			"Ученик(ца) , с именем " + name + "\n" +
// 			"C возрастом " + age + " лет" + "\n" +
// 			"Со среднем баллом" + mark
// 		);
// 	}
// }

// SendProfileStudent("Юля ", 18, 4.23 , true );
// SendProfileStudent("Олег ", 23, 3.70 , true );

// function SendMessage(author,text) { //- параметры
// 	console.log(
// 		// принимает параметры (ТЕЛО ФУНКЦИИ)
// 	)
// }

// SendMessage("Алексей, another text"); //АРГУМЕНТЫ

// КОГДА ПЕРЕКИДЫВАЕМ АРГУМЕНТ В ПАРАМЕТР ФУНКЦИИ ТО ПЕРЕМЕННАЯ НЕ МЕНЯЕТСЯ ОНА КОПИРУЕТСЯ
//ТАК ОРГАНИЗОВЫВАЕТСЯ ПЕРЕДАЧА АРГУМЕНТА В ФУНКЦИЮ

// function doIt(param) {
// 	param = 2;
// };

// var test = 1;
// doIt(text);
// console.log(test); //1