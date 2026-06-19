const fs = require("fs");
const path = require("path");

const TODOS_FILE = path.join(__dirname, "todos.json");

class TodoApp {
  constructor() {
    this.todos = this.loadTodos();
  }

  loadTodos() {
    try {
      if (fs.existsSync(TODOS_FILE)) {
        const data = fs.readFileSync(TODOS_FILE, "utf-8");
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error.message);
    }
    return [];
  }

  saveTodos() {
    try {
      fs.writeFileSync(TODOS_FILE, JSON.stringify(this.todos, null, 2));
      return true;
    } catch (error) {
      console.error("Erro ao salvar tarefas:", error.message);
      return false;
    }
  }

  addTodo(title, description = "") {
    const todo = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.todos.push(todo);
    this.saveTodos();
    return todo;
  }

  getTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  completeTodo(id) {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.completed = true;
      todo.updatedAt = new Date().toISOString();
      this.saveTodos();
      return todo;
    }
    return null;
  }

  updateTodo(id, title, description) {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.title = title || todo.title;
      todo.description = description !== undefined ? description : todo.description;
      todo.updatedAt = new Date().toISOString();
      this.saveTodos();
      return todo;
    }
    return null;
  }

  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
      const removed = this.todos.splice(index, 1);
      this.saveTodos();
      return removed[0];
    }
    return null;
  }

  clearCompleted() {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter((todo) => !todo.completed);
    if (initialLength !== this.todos.length) {
      this.saveTodos();
      return initialLength - this.todos.length;
    }
    return 0;
  }

  getStats() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      pending: this.todos.filter((todo) => !todo.completed).length,
    };
  }

  displayTodos() {
    if (this.todos.length === 0) {
      console.log("\n📋 Nenhuma tarefa adicionada ainda.");
      return;
    }

    console.log("\n📋 MINHAS TAREFAS:");
    console.log("─".repeat(80));

    this.todos.forEach((todo, index) => {
      const status = todo.completed ? "✅" : "⭕";
      const strikethrough = todo.completed ? "~" : "";
      console.log(
        `${index + 1}. ${status} [${todo.id}] ${strikethrough}${todo.title}${strikethrough}`
      );
      if (todo.description) {
        console.log(`   └─ ${todo.description}`);
      }
    });

    console.log("─".repeat(80));
    const stats = this.getStats();
    console.log(
      `📊 Total: ${stats.total} | ✅ Concluídas: ${stats.completed} | ⏳ Pendentes: ${stats.pending}`
    );
    console.log();
  }
}

module.exports = TodoApp;
