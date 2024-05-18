interface Expense {
    amount: number;
    category: string;
    date: string;
}

class ExpenseTracker {
    private amount: HTMLInputElement;
    private category: HTMLInputElement;
    private date: HTMLInputElement;
    private tasks: Expense[] = [];

    constructor() {
        this.amount = document.getElementById('amount') as HTMLInputElement;
        this.category = document.getElementById('category') as HTMLInputElement;
        this.date= document.getElementById('date') as HTMLInputElement;
    }

    addValue() {
        const amount = parseInt(this.amount.value);
        const category = this.category.value;
        const date = this.date.value;

        

        const newTask: Expense = { amount, category, date };
        this.tasks.push(newTask);
        console.log(this.tasks);
        this.renderTasks();
    }

    getItems() {
        return this.tasks;
    }
    delete(date:string){
        this.tasks=this.tasks.filter((item)=>{
            item.date!==date
            
            console.log(this.tasks);

        })

        this.renderTasks()

    }

     renderTasks() {
        const table = document.getElementById('table') as HTMLTableElement;
        table.innerHTML = `
            <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        `;
        

        this.getItems().forEach((item) => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${item.amount}</td>
                <td>${item.category}</td>
                <td>${item.date}</td>
                <td><button onclick="editItem(${item.amount}, '${item.category}', '${item.date}')">Edit</button></td>
                <td><button onclick="adder.delete('${item.date}')">Delete</button></td>
            `;
        });
    }
}
const adder = new ExpenseTracker();





