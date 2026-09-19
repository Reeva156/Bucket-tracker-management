var myExpenseChart = null;

function renderExpenseChart(expensesList) {
  var canvas = document.getElementById("expenseChart");
  if (!canvas || typeof Chart === "undefined") {
    return;
  }

  if (!expensesList || expensesList.length === 0) {
    if (myExpenseChart) {
      myExpenseChart.destroy();
      myExpenseChart = null;
    }
    return;
  }

  var labels = [];
  var dataValues = [];

  for (var i = 0; i < expensesList.length; i++) {
    labels.push(expensesList[i].title);
    dataValues.push(parseFloat(expensesList[i].amount) || 0);
  }

  var colors = [
    "#4e73df", "#1cc88a", "#36b9cc", "#f6c23e",
    "#e74a3b", "#6f42c1", "#fd7e14", "#20c997"
  ];

  if (myExpenseChart) {
    myExpenseChart.destroy();
  }

  var ctx = canvas.getContext("2d");
  myExpenseChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: colors.slice(0, labels.length)
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
