# Expense Tracker Using HTML-CSS and JavaScript
For various features of the Expense Tracker app, focusing on key functionalities like adding, managing, and calculating expenses, as well as user interface (UI) interactions.

1. Add Income
Description: This feature allows the user to input their income details, including a description (e.g., "Salary" or "Bonus") and the amount. When the user clicks the "Add Income" button, the input data is validated and added to the income list, updating the total income and balance.
Implementation:
Capture the description and amount from the form.
Validate that the amount is a valid number.
Add the income to an income list or array.
Recalculate and update the Total Income and Balance fields.

2. Add Expense
Description: This feature allows the user to log an expense by inputting a description (e.g., "Rent"), selecting a category (e.g., "Housing"), and entering the expense amount. When the user clicks the "Add Expense" button, the data is validated and added to the transaction history, updating the total expenses and balance.
Implementation:
Capture the expense description, category, and amount.
Validate the inputs, ensuring a valid number for the amount.
Add the expense to the transaction list and recalculate the total expenses and balance.
Display the expense in the Transaction History table.

3. Transaction History
Description: This feature displays all added incomes and expenses in a table format, showing the description, category (for expenses), amount, and the type (either Income or Expense). It helps users track their spending and incomes in one place.
Implementation:
Each time an income or expense is added, the transaction should be appended to the transaction history table.
Allow the user to remove individual transactions.

4. Budget Summary
Description: The Budget Summary feature displays the user's total income, total expenses, and remaining balance. This section is dynamically updated whenever a new income or expense is added.
Implementation:
Recalculate the Total Income, Total Expenses, and Balance whenever a transaction is added or removed.
Display the results in the corresponding fields.

5. Clear All Transactions
Description: This feature allows the user to clear all transactions from the history, resetting the total income, total expenses, and balance to zero.
Implementation:
Clear the transaction history by removing all rows from the table.
Reset the total income and total expenses to zero, updating the budget summary.

6. Notification System
Description: This feature shows notifications to the user when there are validation errors or when actions are successfully completed (e.g., adding an income or expense).
Implementation:
Create a notification system that shows temporary messages to the user.
Display the message for a few seconds before hiding it.
