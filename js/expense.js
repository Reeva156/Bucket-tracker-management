function calculateTotalExpenses(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) {
    total = total + parseFloat(list[i].amount);
  }
  return total;
}

function calculateBudgetLeft(budget, totalExpenses) {
  return budget - totalExpenses;
}

function addExpenseItem(list, title, amount, date) {
  if (!date) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    date = yyyy + '-' + mm + '-' + dd;
  }

  var item = {
    id: Date.now(),
    title: title.trim(),
    amount: parseFloat(amount),
    date: date
  };

  list.push(item);
  saveStoredExpenses(list);
  return item;
}

function deleteExpenseItem(list, id) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
      saveStoredExpenses(list);
      return true;
    }
  }
  return false;
}

function editExpenseItem(list, id, newTitle, newAmount, newDate) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].title = newTitle.trim();
      list[i].amount = parseFloat(newAmount);
      if (newDate) {
        list[i].date = newDate;
      }
      saveStoredExpenses(list);
      return true;
    }
  }
  return false;
}
