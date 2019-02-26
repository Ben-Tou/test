let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    while (Object.keys(appData.expenses).length < 2) { //разобраться

    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50) {

        console.log("done");     
        appData.expenses[a] = b;
        }
    }
};

chooseExpenses();