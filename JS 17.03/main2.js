/* let number = prompt("Введите число") 
number = parseInt(number)

for( let i = 1; i<= number; i++) {
    if (number % i === 0) {
        console.log(i)
    }
} */ // ex9 ds код который вычисляет все делители от указанного числа 

//ex10 ds который который вычисляет факториал указанного числа (факториал = умножение до этого числа например : 5! (1*2*3*4*5=120))
/* let number = prompt("введите число")
number = parseInt(number)

let factorial = 1;
let i = 1;

while (i <= number) {
    factorial *= i
    i++
}

console.log("Факториал числа:" + number + "Равен=" + factorial) */

//switch/case
//switch заменяет много if ( === значит строгое сравнение )
/* switch(x) {
    case 'value1'  // if (x === value1)
} */

//default это типо else в if когда не одно значение не подходит выводит то что там будет прописано ;break = остановить 
/* let a = 2 + 2
switch (a) {
    case 3:
        alert('Маловато')
        break
    case 9:
        alert('Вы правы')
        break
    case 5:
        alert('Много')
        break
    default:
        alert('Значение отсутствуют')
} */
// любое выражение может быть аргументом для switch/case
/* let a = "1"
let b = 0 

switch(+a) {
    case b + 1:
        alert('Выполнится т.к значением а+ будет 1, что в точности равно b+1')
        break;
    default:
        alert("Это не выполнится")
}       
 */


//Группировка "case"
/* let a = 3 

switch (a) {
    case 4:
        alert("правильно")
        break
    case 3:
    case 5:
        alert("Не правильно. Иди в школу!")
        break;

    default:
        alert("Результат выглядит странно")
} */

/* let a = "Academy Top"

switch (a) {
    case "Academy":
        alert("ERROR")
        break
    case "Academy Top":
        alert("YES")
        break
    
    default:
        alert("Ошибка")
}  */


/* let arg = prompt("Введите значения")
// arg = +(arg) //Внимательно смотри за типом данных (там 3 она без '' а если мы не преобразовываем переменную arg в число то работает только то что в '' )
switch (arg) {
    case "0":
    case '1':
        alert('Один или ноль')
        break;
    case '2':
        alert('Два')
        break;
    case 3:
        alert('Никогда не выполнится')
        break;
    default:
        alert('ERROR')
}  */



/* 
        switch (browser) {
            case 'Edge':
              alert( "You've got the Edge!" );
              break;
          
            case 'Chrome':
            case 'Firefox':
            case 'Safari':
            case 'Opera':
              alert( 'Okay we support these browsers too' );
              break;
          
            default:
              alert( 'We hope that this page looks ok!' );
          } */ // задание с js learn++




/*  let browser = prompt('Напишите любой браузер')

if (browser == "Edge") {
    alert("You've got the Edge!")
} else if (browser == "Chrome") {
    alert('Okay we support these browsers too')
}else if (browser == "Firefox") {
    alert('Okay we support these browsers too')
}else if (browser == "Safari") {
    alert('Okay we support these browsers too')
}else if (browser == "Opera") {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
} */ 



// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// } // задание с js learn++


/*   let number = +prompt('Введите число между 0 и 3', '')
switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
    default:
        alert('Вы не ввели подходящего числа числа')    
}  */        



/* function nameFunction() { //название и параметры функции
    //тело функции
    let mylet = 50 
    // alert(mylet)
    alert('Hello world')
}

nameFunction(); //функции всегда нужно вызывать иначе работать не будет в скобках может быть её имя или параметры 

mylet = 10 
alert(mylet) */


/* function printWord(value, value1) {
    alert(value + "как твои дела?" + value1)
}

printWord("Tony", 123) */

function printWord(value = "значение по умолчанию") {
    alert(value)
    alert(value1) 
}

printWord();



