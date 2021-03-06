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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
         if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?", ""),
                    percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        for (let j=0; j<1; j++) {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        
        if ((typeof(items)) === 'string' && (typeof(items)) != null && (typeof(items)) !== "undefinend") {
        
            appData.income = items.split(", ");
            appData.income.push(prompt('Может чтото еще?', ''));
            appData.income.sort();
            appData.income.forEach(function(item, i) {
            console.log(++i + ': ' + 'Способы доп. заработка: ' + item);
        });

        } else {
            j = j - 1;  
        }
    }
    }

};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}

//appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed округлит но вернет строковое значение
