
const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        console.log(accounts);
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

/**
 * Transfers money from source acoount to another one (set in prompt)
 * If target account doesn't exist, money is removed from source account which is incorrect
 */
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

/**
 * Fixes the issue with non existing target account
 */
function transfer2(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
        console.log(accounts);
    }
}

// transfer('c', 10);
// console.log(accounts);
transfer2('c', 10);
console.log(accounts);