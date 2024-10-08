let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
    
    if (!description || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid income description and amount.');
        return;
    }

    totalIncome += amount;
    addToTransactionHistory(description, '', amount, 'Income');
    updateBudgetSummary();

    document.getElementById('income-description').value = '';
    document.getElementById('income-amount').value = '';
}

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (!description || !category || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid expense description, category, and amount.');
        return;
    }

    totalExpenses += amount;
    addToTransactionHistory(description, category, amount, 'Expense');
    updateBudgetSummary();

    document.getElementById('expense-description').value = '';
    document.getElementById('expense-category').value = '';
    document.getElementById('expense-amount').value = '';
}

function clearAll() {
    if (confirm('Are you sure you want to clear all transactions?')) {
        document.getElementById('transaction-history').innerHTML = '';
        totalIncome = 0;
        totalExpenses = 0;
        updateBudgetSummary();
    }
}

function showNotification(message) {
    const notificationElement = document.getElementById('notification');
    notificationElement.innerText = message;
    notificationElement.classList.remove('hidden');

    setTimeout(() => {
        notificationElement.classList.add('hidden');
    }, 3000);
}

function updateBudgetSummary() {
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const balanceElement = document.getElementById('balance');

    totalIncomeElement.innerText = totalIncome.toFixed(2);
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balance = totalIncome - totalExpenses;
    balanceElement.innerText = balance.toFixed(2);
}

function addToTransactionHistory(description, category, amount, type) {
    const transactionHistory = document.getElementById('transaction-history');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${description}</td>
        <td>${category || '-'}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${type}</td>
        <td><button onclick="removeTransaction(this, ${amount}, '${type}')">Remove</button></td>
    `;
    transactionHistory.appendChild(row);
}

function removeTransaction(button, amount, type) {
    const row = button.parentElement.parentElement;
    row.remove();

    if (type === 'Income') {
        totalIncome -= amount;
    } else if (type === 'Expense') {
        totalExpenses -= amount;
    }

    updateBudgetSummary();
}