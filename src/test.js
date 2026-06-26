const TodoApp = require("./app");

function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ ${testName}`);
    return true;
  } else {
    console.log(`❌ ${testName}`);
    console.log(`   Esperado: ${JSON.stringify(expected)}`);
    console.log(`   Obtido: ${JSON.stringify(actual)}`);
    return false;
  }
}

function runTests() {
  console.log("\n🧪 Executando testes da aplicação To-Do...\n");

  let passedTests = 0;
  let totalTests = 0;

  // Teste 1: Criar nova instância
  totalTests++;
  const app = new TodoApp();
  if (app.getTodos().length >= 0) {
    console.log("✅ Teste 1: Instância criada com sucesso");
    passedTests++;
  }

  // Teste 2: Adicionar tarefa
  totalTests++;
  const todo1 = app.addTodo("Estudar JS", "Aprender sobre callbacks e promises");
  if (
    todo1.title === "Estudar JS" &&
    todo1.description === "Aprender sobre callbacks e promises" &&
    !todo1.completed
  ) {
    console.log("✅ Teste 2: Tarefa adicionada com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 2: Falha ao adicionar tarefa");
  }

  // Teste 3: Obter todas as tarefas
  totalTests++;
  const todos = app.getTodos();
  if (todos.length > 0) {
    console.log("✅ Teste 3: Tarefas obtidas com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 3: Nenhuma tarefa obtida");
  }

  // Teste 4: Obter tarefa por ID
  totalTests++;
  const retrievedTodo = app.getTodoById(todo1.id);
  if (retrievedTodo && retrievedTodo.id === todo1.id) {
    console.log("✅ Teste 4: Tarefa obtida por ID com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 4: Falha ao obter tarefa por ID");
  }

  // Teste 5: Marcar tarefa como concluída
  totalTests++;
  const completedTodo = app.completeTodo(todo1.id);
  if (completedTodo && completedTodo.completed) {
    console.log("✅ Teste 5: Tarefa marcada como concluída");
    passedTests++;
  } else {
    console.log("❌ Teste 5: Falha ao marcar tarefa como concluída");
  }

  // Teste 6: Adicionar segunda tarefa
  totalTests++;
  const todo2 = app.addTodo("Fazer exercícios");
  if (app.getTodos().length >= 2) {
    console.log("✅ Teste 6: Segunda tarefa adicionada");
    passedTests++;
  } else {
    console.log("❌ Teste 6: Falha ao adicionar segunda tarefa");
  }

  // Teste 7: Atualizar tarefa
  totalTests++;
  const updatedTodo = app.updateTodo(todo2.id, "Fazer exercícios de JS");
  if (updatedTodo && updatedTodo.title === "Fazer exercícios de JS") {
    console.log("✅ Teste 7: Tarefa atualizada com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 7: Falha ao atualizar tarefa");
  }

  // Teste 8: Obter estatísticas
  totalTests++;
  const stats = app.getStats();
  if (stats.total >= 2 && stats.completed >= 1) {
    console.log("✅ Teste 8: Estatísticas obtidas corretamente");
    passedTests++;
  } else {
    console.log("❌ Teste 8: Falha ao obter estatísticas");
  }

  // Teste 9: Remover tarefa
  totalTests++;
  const initialLength = app.getTodos().length;
  app.removeTodo(todo1.id);
  if (app.getTodos().length === initialLength - 1) {
    console.log("✅ Teste 9: Tarefa removida com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 9: Falha ao remover tarefa");
  }

  // Teste 10: Limpar tarefas concluídas
  totalTests++;
  app.addTodo("Tarefa teste 1");
  const todo3 = app.addTodo("Tarefa teste 2");
  app.completeTodo(todo3.id);
  const beforeClear = app.getTodos().length;
  const cleared = app.clearCompleted();
  if (cleared > 0) {
    console.log("✅ Teste 10: Tarefas concluídas limpas com sucesso");
    passedTests++;
  } else {
    console.log("❌ Teste 10: Falha ao limpar tarefas concluídas");
  }

  console.log(
    `\n📊 Resultado: ${passedTests}/${totalTests} testes passaram\n`
  );

  if (passedTests === totalTests) {
    console.log("🎉 Todos os testes passaram!");
    process.exit(0);
  } else {
    console.log("⚠️  Alguns testes falharam!");
    process.exit(1);
  }
}

runTests();
