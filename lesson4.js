'use strict';

//1
//(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
//вход число в диапазоне [0, 999],
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)
//Например, для числа 45 мы должны получить следующий объект:
//{
//units: 5, //это единицы
//tens: 4, //это десятки
//hundreds: 0, //это сотни
//}
//Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

class NumToObj {
  constructor(num) {
    function isNumber (n) {
        return ! isNaN (n-0);
    }
    function isFloat (n) {
        return n===+n && n!==(n|0);
    }

    if (isNumber(num)) {
      if (num >= 0 && num <= 999) {
        if (! isFloat(num)) {
          this.units = num % 10;
          this.tens = parseInt(num % 100 / 10);
          this.hundereds = parseInt(num / 100);
        }
        else {
        console.log('Число не целое')
      }
      }
      else {
        console.log('Число не в диапозоне 0-999')
      }
    }
      else {
        console.log('Это не число')
      }
  }
}

let num = new NumToObj(987);
console.log(num);
let a = new NumToObj('a');
let b = new NumToObj(-1);
let c = new NumToObj(1000);
let d = new NumToObj(10.3);
console.log(a, b, c, d);

//1.1
//(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
//видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
//и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
//make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
//make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
//объект-прототип (как объект transport в уроке).


//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    let discount = this.price * 25 / 100;
    this.price = this.price - discount;
}

let product = new Product('first', 100)
console.log(product)
product.make25PercentDiscount()
console.log(product)

//es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        let discount = this.price * 25 / 100;
        this.price = this.price - discount;
    }
}

//1.2
//(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
//видео -> 3 примеры наследования -> механика наследования),
//а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
//типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
//б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
//помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
//свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
//highlighted значение true.

//es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost extends Post {
    constructor(author, text, date, highlighted=false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post = new Post('first', 'text1', 'date')
console.log(post)
post.edit('new text')
console.log(post)

//es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted=false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post = new Post('first', 'text1', 'date')
console.log(post)
post.edit('new text')
console.log(post)
let newPost = new AttachedPost('second', '2', '2')
console.log(newPost)
newPost.edit('newTEXXXT')
console.log(newPost)
newPost.makeTextHighlighted()
console.log(newPost)

//2 (это задание не является частью учебной программы, делайте его по желанию). Для игры бродилка (которая
//есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9
//Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
//и игрок оставался на том же месте где стоял.



//3 (это задание не является частью учебной программы, делайте его по желанию). На базе игры (приняв за
//пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
//Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например
//метод run, возможно метод init и т.д.
//В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
//Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
//ответов в виде теста, например:
//Сколько букв в слове "привет":
//a. Пять.
//b. Шесть.
//c. Семь.
//d. Куда я попал?
//Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
//По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
//сыграть снова.
//Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.