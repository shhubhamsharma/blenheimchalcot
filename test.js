const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/

    // Write your logic here  - No pressure 😁 //



    let result;
    console.log(accountBalanceHistory);
    accountBalanceHistory.sort((a, b) => { return a.monthNumber - b.monthNumber; });
    console.log(accountBalanceHistory);
    if (accountBalanceHistory.length > 2) {
        const plots = accountBalanceHistory.map(
            ({ monthNumber, account }, index) => ({
                x: monthNumber,
                y: account.balance.amount,
                diff: index + 1 < accountBalanceHistory.length && accountBalanceHistory[index + 1].account.balance.amount - account.balance.amount
            })
        );
        result = !plots.some(
            (plot) => {
                if (typeof plot.diff != "boolean" && typeof plots[0].diff != "boolean")
                    return plots[0].diff !== plot.diff;
            }
        );
    }

    return result ? "A" : "B";
};

const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
];

console.log(accountTypeChecker(accountBalanceHistory));