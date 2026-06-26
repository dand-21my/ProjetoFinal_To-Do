const readline = require("readline");
const TodoApp = require("./app");

const app = new TodoApp();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n🚀 APLICAÇÃO TO-DO LIST");
  console.log("═".repeat(80));
  console.log("1. ➕ Adicionar nova tarefa");
  console.log("2. 📋 Listar todas as tarefas");
  console.log("3. ✅ Marcar tarefa como concluída");
  console.log("4. ✏️  Editar tarefa");
  console.log("5. 🗑️  Remover tarefa");
  console.log("6. 🧹 Limpar tarefas concluídas");
  console.log("7. 📊 Ver estatísticas");
  console.log("8. 🚪 Sair");
  console.log("═".repeat(80));
}

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function addTodoInteractive() {
  const title = await prompt("📝 Digite o título da tarefa: ");
  if (!title.trim()) {
    console.log("❌ Título não pode estar vazio!");
    return;
  }

  const description = await prompt(
    "📝 Digite a descrição (opcional, pressione Enter para pular): "
  );
  const todo = app.addTodo(title, description);
  console.log(`\n✨ Tarefa adicionada com sucesso! ID: ${todo.id}`);
}

async function completeTodoInteractive() {
  app.displayTodos();
  const id = await prompt("🎯 Digite o ID da tarefa para marcar como concluída: ");

  const todo = app.completeTodo(parseInt(id));
  if (todo) {
    console.log(`\n✅ Tarefa "${todo.title}" marcada como concluída!`);
  } else {
    console.log("\n❌ Tarefa não encontrada!");
  }
}

async function updateTodoInteractive() {
  app.displayTodos();
  const id = await prompt("🎯 Digite o ID da tarefa para editar: ");
  const todo = app.getTodoById(parseInt(id));

  if (!todo) {
    console.log("\n❌ Tarefa não encontrada!");
    return;
  }

  const title = await prompt(
    `📝 Novo título (atual: "${todo.title}", pressione Enter para manter): `
  );
  const description = await prompt(
    `📝 Nova descrição (atual: "${todo.description}", pressione Enter para manter): `
  );

  const updatedTodo = app.updateTodo(
    parseInt(id),
    title || undefined,
    description === "" ? undefined : description
  );

  console.log(`\n✨ Tarefa atualizada com sucesso!`);
}

async function removeTodoInteractive() {
  app.displayTodos();
  const id = await prompt("🗑️  Digite o ID da tarefa para remover: ");

  const todo = app.removeTodo(parseInt(id));
  if (todo) {
    console.log(`\n✅ Tarefa "${todo.title}" removida com sucesso!`);
  } else {
    console.log("\n❌ Tarefa não encontrada!");
  }
}

async function showStats() {
  const stats = app.getStats();
  console.log("\n📊 ESTATÍSTICAS:");
  console.log("─".repeat(40));
  console.log(`📌 Total de tarefas: ${stats.total}`);
  console.log(`✅ Concluídas: ${stats.completed}`);
  console.log(`⏳ Pendentes: ${stats.pending}`);
  if (stats.total > 0) {
    const percentage = ((stats.completed / stats.total) * 100).toFixed(2);
    console.log(`📈 Progresso: ${percentage}%`);
  }
  console.log("─".repeat(40));
}

async function main() {
  console.clear();
  console.log("🎉 Bem-vindo ao Sistema de To-Do List!");

  let running = true;

  while (running) {
    showMenu();
    const choice = await prompt("Escolha uma opção (1-8): ");

    switch (choice) {
      case "1":
        await addTodoInteractive();
        break;
      case "2":
        app.displayTodos();
        break;
      case "3":
        await completeTodoInteractive();
        break;
      case "4":
        await updateTodoInteractive();
        break;
      case "5":
        await removeTodoInteractive();
        break;
      case "6":
        const removed = app.clearCompleted();
        console.log(
          `\n✨ ${removed} tarefa(s) concluída(s) removida(s)!`
        );
        break;
      case "7":
        await showStats();
        break;
      case "8":
        console.log(
          "\n👋 Obrigado por usar a To-Do List! Até logo!\n"
        );
        running = false;
        break;
      default:
        console.log("❌ Opção inválida! Tente novamente.");
    }
  }

  rl.close();
}

console.log("ToDo App: Sistema inicializado com sucesso!");
main();
setInterval(() => {}, 1000);
