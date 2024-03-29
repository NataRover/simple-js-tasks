//ОБЪЕКТЫ
// const chalk = require("chalk");
// console.log(chalk.green("Hello friend! Task-1 \u{1F642}(Объекты)"));
console.log("Hello friend! Task-1 \uD83D\uDE42(\u041E\u0431\u044A\u0435\u043A\u0442\u044B)");
// ЗАДАНИЕ 1
//У нас есть следующий объект:
//Проверьте, что этот объект не пустой и что в нем есть ключ age.
var user = {
    name: "John",
    age: 30
};
console.log(typeof user);
//1//
if (Object.entries(user).length !== 0 && "age" in user) {
    console.log(user.age);
}
else {
    console.log("объект пустой");
}
//2//
if (typeof user.age !== "undefined" && user.hasOwnProperty("age")) {
    console.log(user.age);
}
else {
    console.log("объект пустой");
}
//3//
if (JSON.stringify(user) == "{}") {
    console.log("пустой");
}
else {
    console.log(user.age);
}
//4//
console.log(user.hasOwnProperty("age"));
//5//
console.log(Object.keys(user) && "age" in user);
//6//
function isEmpty(obj) {
    var isEmpty = true;
    for (var prop in obj) {
        console.log(prop);
        isEmpty = false;
    }
    return isEmpty;
}
console.log(isEmpty(user));
console.log("Hello friend! Task-2 \uD83D\uDE42");
// ЗАДАНИЕ 2
// Имеется массив объектов:
//Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
var obj = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    },
    {
        name: "Niko",
        age: 44
    },
    {
        name: "Mike",
        age: 19
    },
    {
        name: "Kri",
        age: 25
    },
];
//1//
var aboutBob = {};
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
    var user_1 = obj_1[_i];
    if (user_1.name === "Bob") {
        Object.assign(aboutBob, user_1);
    }
}
console.log(aboutBob);
//2//
var bob = obj.find(function (user) { return user.name === "Bob"; });
console.log(bob);
//3//
var bob1 = {};
obj.forEach(function (element) {
    console.log(element);
    if (element.name === "Bob") {
        Object.assign(bob1, element);
    }
});
console.log(bob1);
//4//
var anyAdult = obj.some(function (person) { return person.name === "Bob"; });
console.log(anyAdult); // true
//5//
var myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];
myArray.forEach(function (element, index, array) {
    console.log(element); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});
console.log("Hello friend! Task-3 \uD83D\uDE42");
// ЗАДАНИЕ 3
// Удалите из массива объектов (задание 2) объект с name == "Anna".
//1//
var obj_2 = obj.filter(function (elem) { return elem.name !== "Anna"; });
console.log(obj_2);
//2//
var index = obj.findIndex(function (item) { return item.name === "Anna"; });
obj.splice(index, 1);
console.log(obj);
console.log("Hello friend! Task-4 \uD83D\uDE42");
// ЗАДАНИЕ 4
// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.
//1//
obj.sort(function (a, b) { return a.age - b.age; });
console.log(obj);
// ЗАДАНИЕ 5
console.log("Hello friend! Task-5 \uD83D\uDE42");
//Получите из объекта obj значение id и разместите его в константу userId.
var obj_3 = {
    id: 5,
    token: 12343423
};
//1//
var userId = obj_3.id;
console.log(userId);
// ЗАДАНИЕ 6
console.log("Hello friend! Task-6 \uD83D\uDE42");
//Получите список свойств объекта
var student = {
    name: "David Ray",
    "class": "VI",
    age: 16
};
//1//
for (var el in student) {
    console.log(el);
}
// ЗАДАНИЕ 7
console.log("Hello friend! Task-7 \uD83D\uDE42");
//удаления свойства age из следующего объекта.
delete student.age;
console.log(student);
// ЗАДАНИЕ 8
console.log("Hello friend! Task-8 \uD83D\uDE42");
//Получить длину объекта student.
//1//
var objsize = Object.keys(student).length;
console.log(objsize);
//2//
var objsize2 = Object.getOwnPropertyNames(student).length;
console.log(objsize2);
// ЗАДАНИЕ 9
console.log("Hello friend! Task-9 \uD83D\uDE42");
//Напишите программу на JavaScript для отображения статуса
//чтения (то есть отображения названия книги, имени автора и статуса чтения) следующих книг.
var library = [
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: false
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false
    },
    {
        title: "Blood diamond",
        author: "Эдвард Цвик",
        readingStatus: true
    },
    {
        title: "Mandalorian",
        author: "Джон Фавро",
        readingStatus: true
    },
];
//1//
for (var index_1 = 0; index_1 < library.length; index_1++) {
    var element = library[index_1];
    var book = "'" + element.title + "'" + " " + element.author + "-";
    if (element.readingStatus) {
        console.log(book + " \u043A\u043D\u0438\u0433\u0430 \u043F\u0440\u043E\u0447te\u043D\u0430");
    }
    else {
        console.log(book + " \u043A\u043D\u0438\u0433\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0447\u0435\u0441\u0442\u044C");
    }
}
// ЗАДАНИЕ 10
console.log("Hello friend! Task-10 \uD83D\uDE42");
//Смысл задачи: если значение объекта является числом (number),
//то его значение надо увеличить вдвое.
var menu = {
    width: 200,
    height: 300,
    title: "my menu"
};
//1//
for (var _a = 0, _b = Object.values(menu); _a < _b.length; _a++) {
    var value = _b[_a];
    if (typeof value == "number") {
        value = value * 2;
        console.log(value);
    }
}
//2//
for (var elem in menu) {
    if (typeof menu[elem] == "number") {
        menu[elem] *= 2;
    }
}
console.log(menu);
//3//
//ЗАДАЧА 11//
console.log("Hello friend! Task-11 \uD83D\uDE42");
// 1. Есть три объекта (три автомобиля): first_Car, second_Car и third_Car.
// 2. Каждый из объектов (автомобилей) имеет набор свойств и соответствующих им значений (характеристики автомобиля).
// 3. Рассмотрим один из объектов:
// var first_Car = {
// make: "VAZ", /* производитель */
// model: 2106, /* модель */
// year: 1980, /* год выпуска */
// color: "beige", /* цвет */
// passengers: 5, /* число пассажиров */
// convertible: false, /* откидной верх */
// mileage: 80000 /* пробег */
// }
// - свойства make и color имеют строковые значения;
// - свойства model, year, passengers и mileage - числовые значения;
// - свойство convertible принимает булево значение.
// Нужно сделать следующее:
// Написать функцию, которая проверяет автомобиль по двум параметрам (год выпуска и пробег)
// и возвращает булево значение true или false.
// Подробности:
// 1. Функция имеет один параметр car, в качестве которого получает один из 3-х объектов.
//Например, выше рассмотренный автомобиль first_Car.
// 2. Функция должна работать с любым подобным объектом.
//1//
/* 1-ый объект */
var first_Car = {
    make: "VAZ" /* производитель */,
    model: 2106 /* модель */,
    year: 1980 /* год выпуска */,
    color: "beige" /* цвет */,
    passengers: 5 /* число пассажиров */,
    convertible: false /* откидной верх */,
    mileage: 80000 /* пробег */
};
/* 2-ой объект */
var second_Car = {
    make: "VW",
    model: "Passat b3",
    year: 1990,
    color: "neptune",
    passengers: 5,
    convertible: false,
    mileage: 160000
};
/* 3-ий объект */
var third_Car = {
    make: "Hyundai",
    model: "Solaris",
    year: 2012,
    color: "wet asphalt",
    passengers: 5,
    convertible: false,
    mileage: 15000
};
/* Функция для проверки объекта */
function good_Car(car) {
    if (car.year < 2000) {
        return false;
    }
    else if (car.mileage > 50000) {
        return false;
    }
    else {
        return true;
    }
}
/* Заносим результат работы функции good_Car и Анализ результата в еще одну функцию */
function itog(car) {
    var result = good_Car(car);
    if (result) {
        console.log("У Вас неплохой автомобиль: " +
            car.year +
            " год выпуска, с пробегом " +
            car.mileage +
            " км.");
    }
    else {
        console.log("Не будем говорить о Вашем автомобиле....");
    }
}
itog(second_Car);
//ЗАДАЧА-12//
console.log("Hello friend! Task-12 \uD83D\uDE42");
// Дан объект,описывающий прямоугольник (хранит коор-
//     динаты левой верхней и правой нижней точек)
var rectangle = {
    startPoint: {
        x: 0,
        y: 0
    },
    endPoint: {
        x: 10,
        y: 15
    }
};
//Написать следующие функции для работы с таким объектом.
//1.Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
function getRectPoints() {
    console.log("startPoint (", rectangle.startPoint.x, ",", rectangle.startPoint.y, ")");
    console.log("endPoint (", rectangle.endPoint.x, ",", rectangle.endPoint.y, ")");
}
getRectPoints();
// 2.Функция принимает объект-прямоугольник и возвращает его ширину.
function getRectWide() {
    return rectangle.endPoint.x - rectangle.startPoint.x;
}
var width = getRectWide();
console.log("width", width);
// 3.Функция принимает объект-прямоугольник и возвращает его высоту.
function getRectHeight() {
    return rectangle.endPoint.y - rectangle.startPoint.y;
}
var height = getRectHeight();
console.log("height", height);
// 4.Функция принимает объект-прямоугольник и возвращает его площадь.
function getRectArea() {
    return getRectWide() * getRectHeight();
}
var area = getRectArea();
console.log("area", area);
//5.Функция принимает объект-прямоугольник и возвращает его периметр.
function getRectPerim() {
    return (getRectWide() + getRectHeight()) * 2;
}
var perimetr = getRectPerim();
console.log("perimetr", perimetr);
//6.Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник
// и на сколько единиц изменить ширину.
//7.Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник
// и на сколько единиц изменить высоту.
/* 8
Функция изменения ширины и высоты прямоугольника.
Она принимает объект-прямоугольник и два значения –
для изменения ширины и высоты. */
/* 9
Функция смещения прямоугольника по оси X. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть. */
/* 10 Функция смещения прямоугольника по оси Y. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть. */
/*
11 Функция смещения прямоугольника и по оси X и по
оси Y. Она принимает объект-прямоугольник и два значе-
ния: сдвиг по оси X и сдвиг по оси Y. */
/* 12 Функция для проверки, находится ли точка внутри пря-
моугольника. Она принимает объект-прямоугольник и
координаты точки. */
//ЗАДАЧА 14//
console.log("Hello friend! Task-14 \uD83D\uDE42");
var fido = {
    name: "Fido",
    weight: 48,
    breed: "Mixed",
    loves: "walks"
};
// Предположим,мы тестируем новый метод по снижению веса собак.Напишите
//функцию LoseWeight чтобы пользователь вводил обьект и вес,который нужно сбросить.А собака по волшебству,похудеет.
function LoseWeight(dog, amout) {
    dog.weight = dog.weight - amout;
}
LoseWeight(fido, 20);
console.log(fido.name + " + \"now weight\" + " + fido.weight);
//ЗАДАЧА-15//
console.log("Hello friend! Task-15 \uD83D\uDE42");
// Вам вручили сверхсекретный файл и две функции, позволяющие читать и записывать
// содержимое файла, но только при наличии пароля. Первая функция, getSecret,
// возвращает содержимое файла, если пароль указан правильно, и регистрирует все
// попытки обращения к файлу. Вторая функция, setSecret, обновляет содержимое
// файла и обнуляет счетчик обращений.
var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: " Dr. Evel's  next meeting is in Detroit"
};
function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}
function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}
var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's  next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);
// ЗАДАЧА-16
console.log("Hello friend! Task-16 \uD83D\uDE42");
//Создайте объект list, задайте для него: свойство values, содержащее массив похожих значений,
// например, ка- ких-либо продуктов
// Метод printList(), который сортирует все элементы массива values в алфавитном порядке
// и выводит их в виде нумерованного списка в тело документа методом document.write(),
//метод add(product), который добавля- ет к values еще один элемент.
// Выведите сначала массив начальных значений объ- екта list с помощью его метода printList().
//Например, это будет список продуктов:
// 1.apple
// 2.ice cream
// 3.kivi
// 4.potato
// 5.sour creame
// 6.tomato
// Затем добавьте еще один какой-нибудь элемент с по- мощью метода add() и снова выведите все значений объекта
//list методом printList().
// 1.apple
// 2.ice cream
// 3.kivi
// 4.potato
// 5.sour creame
// 6.tomato
// 7.pumpkin
// Затем замените все значения в свойстве list.values на другой массив и снова выведите его методом printList().
//Например, так:
// 1.Java Script
// 2.C#
// 3.HTML
// 4.PHP
var list = {
    values: ["tomato", "kivi", "potato", "sour creame", "apple", "ice cream"],
    printList: function () {
        this.values.sort();
        for (var index_2 = 0; index_2 < this.values.length; index_2++) {
            var element = this.values[index_2];
            console.log("<ul><ol>" + element + "</ol></ul>");
        }
    },
    addProduct: function () {
        this.values.push("pumkin");
    }
};
list.printList();
list.addProduct();
list.printList();
console.log(list.values);
list.values = ["Java script", "C#", "HTML", "PHP"];
console.log(list.values);
// ОБЪЕКТ DATE
// ЗАДАЧА-17
console.log("Hello friend! Task-17 \uD83D\uDE42");
//СТРОКИ
console.log("Hello friend! Task-1(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//ЗАДАЧА-1
/*Написать функцию, которая принимает 2 строки и срав-
нивает их длину.Функция возвращает 1, если в первой
строке больше символов, чем во второй;-1 – если во вто-
рой больше символов, чем в первой;или 0 – если строки
одинаковой длины */
function string(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    }
    else if (str2.length > str1.length) {
        return -1;
    }
    return 0;
}
console.log(string("more", "butterfly"));
//ЗАДАЧА-2
console.log("Hello friend! Task-2(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/*Написать функцию, которая переводит в верхний регистр
первый символ переданной строки*/
function upString(str) {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(upString("dracula"));
//2
function cursive_letter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(cursive_letter("dracula"));
//ЗАДАЧА-3
console.log("Hello friend! Task-3(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/*Написать функцию, которая считает количество гласных
букв в переданной строке.*/
function countVowel(str) {
    return str.match(/[aeiou]/gi).length;
}
console.log(countVowel("Some love one"));
//ЗАДАЧА-4
console.log("Hello friend! Task-4(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/*Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.*/
function checkSpam(str) {
    var lowstr = str.toLowerCase();
    return (lowstr.indexOf("100% бесплатно") != -1 ||
        lowstr.indexOf("xxx") != -1 ||
        lowstr.indexOf("увеличение продаж") != -1 ||
        lowstr.indexOf("только сегодня") != -1 ||
        lowstr.indexOf("не удаляйте") != -1);
}
console.log(checkSpam("привет"));
console.log(checkSpam("Xxx"));
console.log(checkSpam("Не уДаЛяйте"));
//2
function checkSpam1(str) {
    var lowstr = str.toLowerCase();
    return (lowstr.includes("100% бесплатно") ||
        lowstr.includes("xxx") ||
        lowstr.includes("увеличение продаж") ||
        lowstr.includes("только сегодня") ||
        lowstr.includes("не удаляйте"));
}
console.log(checkSpam1("привет"));
console.log(checkSpam1("XxX"));
console.log(checkSpam1("Не уДаЛяйте"));
//ЗАДАЧА-5
console.log("Hello friend! Task-5(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/* Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...” */
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num - 3) + "...";
    }
    else {
        return str;
    }
}
console.log(truncateString("Hello,world!", 8));
//ЗАДАЧА-6
console.log("Hello friend! Task-6(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/*Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом. */
//1
function palindrome(str) {
    return str.split("").reverse().join("") == str;
}
console.log(palindrome("anna"));
console.log(palindrome("annA"));
console.log(palindrome("123321"));
console.log(palindrome("art123art"));
//2
function palindrome2(str) {
    var check = "";
    for (var i = str.length - 1; i >= 0; --i) {
        check += str[i];
    }
    return str == check;
}
console.log(palindrome("34543"));
console.log(palindrome("345543"));
console.log(palindrome("3"));
console.log(palindrome(""));
console.log(palindrome("723210"));
//ЗАДАЧА-7
console.log("Hello friend! Task-7(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая считает количество слов в
// предложении.
function txt(str) {
    return str.split(" ").length;
}
console.log(txt("каждый охотник желает знать"));
//ЗАДАЧА-8
console.log("Hello friend! Task-8(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Написать функцию, которая возвращает самое длинное
//cлово из предложения.
function txt_2(str) {
    str = str.split(" ");
    var longeStr = "";
    for (var index_3 = 0; index_3 < str.length; index_3++) {
        var element = str[index_3];
        // console.log(element.length);
        if (element.length > longeStr.length) {
            longeStr = element;
        }
    }
    return longeStr;
}
console.log(txt_2("May the force be with!"));
console.log(txt_2("The quick brown fox jumps over the lazy dog"));
//ЗАДАЧА-9
console.log("Hello friend! Task-9(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая считает среднюю длину слова
// в предложении.
function text_3(str) {
    str = str.split(" ");
    // console.log(str.length);
    var midleStr = 0;
    var sumStr = 0;
    for (var index_4 = 0; index_4 < str.length; index_4++) {
        var element = str[index_4];
        // console.log(element);
        sumStr = sumStr + element.length;
    }
    midleStr = sumStr / str.length;
    console.log(midleStr);
    return midleStr;
}
console.log(text_3("gg fff rrrr"));
//ЗАДАЧА-10
console.log("Hello friend! Task-10(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
/*Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.*/
function strSymb(str, symb) {
    var inStr = "";
    var index = 0;
    while (true) {
        index = str.indexOf(symb, index);
        if (index != -1) {
            inStr += index + ", ";
            index++;
        }
        else {
            if (inStr)
                inStr = inStr.slice(0, inStr.length - 2);
            return inStr;
        }
    }
}
console.log(strSymb("Hello friendl!", "l"));
//ЗАДАЧА-11
console.log("Hello friend! Task-11(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
function stringToarray(str) {
    return str.trim().split(" ");
}
console.log(stringToarray("Каждый охотник желает знать"));
//ЗАДАЧА-12
console.log("Hello friend! Task-12(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function delete_characters(str, length) {
    return str.substr(0, length);
}
console.log(delete_characters("Каждый охотник желает знать", 7));
//ЗАДАЧА-13
console.log("Hello friend! Task-13(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию insert_dash(str), которая принимает строку str в качестве
// аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
function insert_dash(str) {
    return str.toUpperCase().replace(/\s/g, "-");
}
console.log(insert_dash("Каждый охотник желает знать"));
//2
function insert_dash_2(str) {
    return str.toUpperCase().split(" ").join("-");
}
console.log(insert_dash_2("Каждый охотник желает знать"));
//ЗАДАЧА-14
console.log("Hello friend! Task-14(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
    var str2 = "";
    for (var _i = 0, _a = str.split(" "); _i < _a.length; _i++) {
        var index_5 = _a[_i];
        str2 = str2 + String(index_5.replace(index_5[0], index_5[0].toUpperCase())) + " ";
    }
    return str2;
}
console.log(capitalize("Каждый охотник желает знать"));
//2
function capitalize(str) {
    var arr = str.split(" ");
    var newArr = [];
    arr.forEach(function (item) {
        var word = item[0].toUpperCase() + item.slice(1);
        newArr.push(word);
    });
    var newString = newArr.join(" ");
    return newString;
}
console.log(capitalize("Каждый охотник желает знать"));
//ЗАДАЧА-15
console.log("Hello friend! Task-15(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function change_register(str) {
    var new_str = "";
    for (var index_6 = 0; index_6 < str.length; index_6++) {
        var element = str[index_6];
        if (element == element.toUpperCase()) {
            new_str = new_str + element.toLowerCase();
        }
        else {
            new_str = new_str + element.toUpperCase();
        }
    }
    return new_str;
}
console.log(change_register("кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"));
//2
function change_register_2(str) {
    var new_str = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var elem = str_1[_i];
        new_str =
            new_str + elem === elem.toUpperCase()
                ? elem.toLowerCase()
                : elem.toUpperCase();
    }
    return new_str;
}
console.log(change_register("КАЖДЫЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"));
//ЗАДАЧА-16
console.log("Hello friend! Task-16(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function remove_char(str) {
    var new_str = "";
    new_str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    return new_str;
}
console.log(remove_char("every hunter wishes to know"));
//Данный код работае только для английского шрифта. В этом примере регулярное выражение работает следующим образом: «Убрать все символы, которые не являются цифрой, буквой, пробелом ([^\w\s]), за исключением добавленных символов подчеркивания (|_). Заменить один и более пробельных символов (\s+) одиночным пробелом (" ")».
//ЗАДАЧА-17
console.log("Hello friend! Task-17(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию zeros(num, len, sign), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
function zeros(num, len, sign) {
    var len_zer = len - (num + "").length, // к-во нулей
    num_zer = "";
    for (; len_zer > 0; len_zer--) {
        num_zer += 0;
    }
    return sign === undefined || sign === ""
        ? num_zer + num + ""
        : sign + num_zer + num + "";
}
console.log(zeros(145, 5, "-")); // -00145
console.log(zeros(33, 4, "+")); // +0033
console.log(zeros(33, 4)); // 0033
//ЗАДАЧА-18
console.log("Hello friend! Task-18(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
    var new_str = str1.toUpperCase() === str2.toUpperCase();
    return new_str;
}
console.log(comparison("string", "StRiNg")); // true
console.log(comparison("ABCDe", "AbcdW")); // false
//ЗАДАЧА-19
console.log("Hello friend! Task-19(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию insensitive_search(str1, str2),
//которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
function insensitive_search(str1, str2) {
    var search_str = new RegExp(str2, "ig");
    var result = str1.search(search_str);
    return result > 0 ? "Соответствует" : "Не соответствует";
}
console.log(insensitive_search("Изучаю JavaScript", "javascript"));
// Соответствует
console.log(insensitive_search("Изучаю JavaScript", "javascriptS"));
// Не соответствует
//ЗАДАЧА-20
console.log("Hello friend! Task-20(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
//при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {
    return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
        return m.toUpperCase().replace(/\s+/g, "");
    });
}
console.log(initCap("hEllo woRld")); // HelloWorld
//2
function initCap_2(str) {
    return str
        .trim()
        .split(" ")
        .map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); })
        .join("_");
}
console.log(initCap_2("hEllo woRld")); // HelloWorld
//3
function initCap_3(str) {
    var str2 = "";
    for (var _i = 0, _a = str.split(" "); _i < _a.length; _i++) {
        var s = _a[_i];
        str2 = str2 + s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }
    return str2;
}
console.log(initCap_3("hEllo woRld")); // HelloWorld
//ЗАДАЧА-21
console.log("Hello friend! Task-21(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
// при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
    // Заменяем все заглавные буквы символом подчеркивания (_), а затем строчными буквами
    var new_str = str.replace(/[A-Z]/g, function (letter) {
        return "_" + letter.toLowerCase();
    });
    // Удаляем символ подчеркивания (_) в начале строки
    return new_str.replace(/^_/, "");
}
console.log(initSnake("HelloWorld")); // hello_world
//ЗАДАЧА-22
console.log("Hello friend! Task-22(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
var myStr = " dfgdfg 3453534 ';'.x';arrSortPlace[qdlpk/xz>sdl'q;]";
function statStr(str) {
    str = str.toLowerCase();
    console.log(str.length);
    var res = { letter: 0, number: 0, symbol: 0 };
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var symbol = str_2[_i];
        if (symbol >= "a" && symbol <= "z") {
            ++res.letter;
        }
        else if (symbol >= "0" && symbol <= "9") {
            ++res.number;
        }
        else {
            ++res.symbol;
        }
    }
    return res;
}
console.log(statStr(myStr));
//ЗАДАЧА-23
console.log("Hello friend! Task-23(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.
function toCamelCase(str) {
    var arr = str.split("-");
    return arr.reduce(function (acc, el, i) { return (acc += i == 0 ? el : el[0].toUpperCase() + el.slice(1)); });
}
console.log(toCamelCase("background-color"));
//ЗАДАЧА-24
console.log("Hello friend! Task-24(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.
//ЗАДАЧА-25
console.log("Hello friend! Task-25(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.
//ЗАДАЧА-26
console.log("Hello friend! Task-26(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.
//ЗАДАЧА-27
console.log("Hello friend! Task-27(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.
//ЗАДАЧА-28
console.log("Hello friend! Task-28(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().
//ЗАДАЧА-29
console.log("Hello friend! Task-29(\u0441\u0442\u0440\u043E\u043A\u0438) \uD83D\uDE42");
// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.
function print(tempalte) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < tempalte.length; i++) {
        if (tempalte[i] != "%") {
            str += tempalte[i];
        }
        else {
            if (!Number.isNaN(+tempalte[i + 1])) {
                str += arguments[tempalte[i + 1]];
            }
            else {
                str += tempalte[i];
                str += tempalte[i + 1];
            }
            i++;
        }
    }
    return str;
}
console.log(print("Today is %1 %2.%3.%4 %5", "Monday", 10, 8, 2020, "!!!!()!!!!"));
