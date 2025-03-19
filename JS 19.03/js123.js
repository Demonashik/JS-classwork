
// Function Declaration 

/* function hello() {
  alert('Привет')
}
hello()



// Function Expression 
let world = function() {
    alert('Привет!')
}
world()
 */


/* let world = function() {
  alert('Академия ТОП')
}
 let func = world;

 func() 
 */

//CallBack function

/*  function ask(question, yes, no) {
  if (confirm(question)) yes()
    else no()
 }

 function showOk() {
  alert('Вы согласны')
 }

 function showcancel() {
  alert('Отмена')
 }

ask('Вы согласны?', showOk, showcancel)  */

/* let age = prompt("Сколько вам лет?")

if (age < 18) {
  welcome = function() {
    alert('Привет!')
  }

} else {
  welcome = function() {
    alert("Здравствуйте")
  }
}
welcome() */



// Создайте функцию sayHello, которая выводит в консоль сообщение "Привет!", используя function expression.
/* sayHello = function() {
  console.log("Привет!")
}
sayHello()
 */ //++

// Создайте функцию doSomething, которая принимает callback-функцию и вызывает её. В качестве callback-функции передайте простую функцию, которая выводит в консоль "Я callback!".

/*  let doSomething = function (callback) {
  callback()
}

let mycallback = function(){
  console.log('Я callback!')
}
doSomething(mycallback) */ //++



// Создайте функцию multiply, которая принимает два числа и возвращает их произведение, используя function expression.

/* let multiply = function(c,b) {
  return c * b
}
console.log(multiply(2, 4 )) */ //++

// Создайте функцию calculate, которая принимает два числа и callback-функцию. Callback-функция должна выполнить какую-то операцию с этими числами (например, сложение) и вернуть результат.
/* let calculator = function(a,b,callback) {
  return callback(a,b)
}

let add = function(x,y){
  return x + y 
}
console.log(calculator(5,3, add)) */ //++

// Простой callback
// Создайте функцию askQuestion, которая принимает callback-функцию и вызывает её, передавая строку "Как дела?". Callback-функция должна вывести эту строку в консоль.

/* let askQuestion = function(callback) {
    callback('Как дела?')
}
let showQuestion = function(question) {
  console.log(question)
}
askQuestion(showQuestion) */ // ++


//Стрелочные функции
//ArrowFunc

/* let sum = (a,b) => a + b
alert (sum(1,2)) */

//NO

/* let sum = a => a + 10
alert(sum(2)) */


/* let age = prompt('Сколько вам лет?')

let welcome = (age <18) ? 
  () => alert("Привет") :
  () => alert('Хай') */

  //Многострочные стрелочные функции 

/* let sum = (a,b) => {
  let result = a + b 
  return result
}
alert(sum(1,2))*/



function ask(question,yes,no) => {
  if (confirm(question)) yes()
    else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);




/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */ 