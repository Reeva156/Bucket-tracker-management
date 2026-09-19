# Budget Tracker System (JavaScript)

**Course:** BCA (Bachelor of Computer Applications)  
**Project:** Budget Tracker Management System  
**Language / Tech:** HTML5, CSS3, JavaScript (Vanilla ES6), Bootstrap 5, Chart.js, LocalStorage  

---

## 📌 Project Overview
The **Budget Tracker System** is a client-side web application built with vanilla JavaScript, HTML, and CSS. The goal of this project is to provide a clean and intuitive tool for individuals to record expenses with dates, track their overall budget, analyze spending patterns with visual charts, and maintain accurate financial records.

---

## ✨ Features

### 1. User Interface (UI)
- Clean, responsive two-column layout matching the reference design.
- Soft blue background theme with white card containers and clear typography.
- Quick statistical summary cards:
  - **Total Budget**
  - **Total Expenses**
  - **Budget Left** (dynamically alerts in red if expenses exceed budget).
- Responsive on mobile, tablet, and desktop screens.

### 2. Expense Management (CRUD)
- **Add Expense:** Form to input Expense Title, Amount, and Date.
- **Form Validation:** Ensures non-empty inputs, valid positive numbers, and valid date.
- **Edit Expense:** Modal dialog allowing users to update title, amount, and date for any existing expense.
- **Delete Expense:** Confirmation prompt before removing any item from history.
- **Add Budget:** Dedicated card to set or adjust total monthly/allocated budget.
- **Reset All:** Option to clear all budget and expense data with a safety confirmation prompt.

### 3. Expense History Table
- Displays:
  - **Expense Name**
  - **Date**
  - **Amount**
  - **Action** (Edit and Remove buttons)

### 4. Interactive Chart Visualization
- Powered by **Chart.js** via CDN.
- Dynamic Doughnut Chart displaying the breakdown of expenses by item with interactive tooltips and legend.
- Automatically updates on adding, editing, deleting, or resetting expenses.

### 5. Data Persistence
- Uses browser **`localStorage`** so budget and expenses remain saved between browser sessions and page reloads.

---

## 📁 Folder Structure

The project strictly follows the required directory structure:

```
bucket tracker management/
│
├── bucket.html         # Main HTML page containing layout and forms
├── style.css           # Custom styling for UI and responsive layout
├── Readme.md           # Project documentation and guide
│
├── data/
│   └── expence.json    # Initial sample expense records with dates
│
└── js/
    ├── storage.js      # LocalStorage helper functions (load, save, reset)
    ├── expense.js      # Core logic for calculations and add/edit/delete
    ├── chart.js        # Item spending breakdown chart using Chart.js
    └── app.js          # DOM event listeners, form validation & UI controller
```

---

## 🚀 How to Run the Project

1. Download or clone this folder on your computer.
2. Open the file **`bucket.html`** in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox).
3. No local server installation or npm package manager is required—it runs directly in the browser!
