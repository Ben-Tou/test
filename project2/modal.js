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
    //while (Object.keys(appData.expenses).length < 2) { //разобраться

    for (let i=0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50) {

                console.log("done");     
                appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
};

chooseExpenses();

//appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed округлит но вернет строковое значение

function detectDayBudget() {
    let c = (appData.budget / 30).toFixed();
   
    appData.moneyPerDay = c;

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
   
    return c;
};

detectDayBudget();
 
function detectLevel() {
    if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
};

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
        for (let i=0; i<3; i++) {
            let stateOpt = prompt("Статья необязательных расходов?", "");

        if ( (typeof(stateOpt))=== 'string' && (typeof(stateOpt)) != null 
            && stateOpt != "" && stateOpt.length < 50) {

                console.log("done");     
                appData.optionalExpenses = stateOpt;
                console.log(appData.optionalExpenses);
        } else {
            i = i - 1;
        }
    }
};

chooseOptExpenses();
