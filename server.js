const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta src
app.use(express.static(path.join(__dirname, 'src')));

// Rota raiz para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Rota para servir o arquivo JSON
app.get('/api/todos', (req, res) => {
  const todos = require('./src/todos.json');
  res.json(todos);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║    📋 To-Do App Server Iniciado      ║
  ║    🌐 http://localhost:${PORT}  
  ║    ✅ Servidor rodando com sucesso!  ║
  ╚══════════════════════════════════════╝
  `);
});
