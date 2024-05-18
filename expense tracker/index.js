var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.tasks = [];
        this.amount = document.getElementById('amount');
        this.category = document.getElementById('category');
        this.date = document.getElementById('date');
    }
    ExpenseTracker.prototype.addValue = function () {
        var amount = parseFloat(this.amount.value);
        var category = this.category.value;
        var date = this.date.value;
        var newTask = { amount: amount, category: category, date: date };
        this.tasks.push(newTask);
        console.log(this.tasks);
        this.renderTasks();
    };
    ExpenseTracker.prototype.getItems = function () {
        return this.tasks;
    };
    ExpenseTracker.prototype.delete = function (date) {
        var _this = this;
        this.tasks = this.tasks.filter(function (item) {
            item.date !== date;
            console.log(_this.tasks);
        });
        this.renderTasks();
    };
    ExpenseTracker.prototype.renderTasks = function () {
        var table = document.getElementById('table');
        table.innerHTML = "\n            <tr>\n                <th>Amount</th>\n                <th>Category</th>\n                <th>Date</th>\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n        ";
        this.getItems().forEach(function (item) {
            var row = table.insertRow();
            row.innerHTML = "\n                <td>".concat(item.amount, "</td>\n                <td>").concat(item.category, "</td>\n                <td>").concat(item.date, "</td>\n                <td><button onclick=\"editItem(").concat(item.amount, ", '").concat(item.category, "', '").concat(item.date, "')\">Edit</button></td>\n                <td><button onclick=\"adder.delete('").concat(item.date, "')\">Delete</button></td>\n            ");
        });
    };
    return ExpenseTracker;
}());
var adder = new ExpenseTracker();
function editItem(amount, category, date) {
    // Add edit functionality here
    console.log("Edit ".concat(amount, ", ").concat(category, ", ").concat(date));
}
