

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


let state = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMuch = prompt("Во сколько обойдется?", "");

let expenses = new Object(); 
    
expenses.how = (state + " : " + howMuch);


let optionalExpenses = new Object();


let income = [];


let appData = new Object();

appData.budget = money;

appData.timeData = time;

appData.expenses = expenses.how;

appData.optionalExpenses = optionalExpenses;

appData.income = income;

appData.savings = false;

console.log(appData);

alert("Ваш бюджет на день: " +  money / 30);



