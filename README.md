# 📋 To-Do List App

Uma aplicação moderna de gerenciamento de tarefas (To-Do List) desenvolvida em Node.js com interface interativa por linha de comando.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** com título e descrição
- 📋 **Listar tarefas** com status visual
- ✔️ **Marcar tarefas** como concluídas
- ✏️ **Editar tarefas** existentes
- 🗑️ **Remover tarefas** individuais
- 🧹 **Limpar tarefas concluídas** em lote
- 📊 **Visualizar estatísticas** de progresso
- 💾 **Persistência de dados** em arquivo JSON
- 🧪 **Suite de testes** completa
- 🐳 **Containerização** com Docker
- 🤖 **CI/CD** com GitHub Actions

## 📋 Requisitos

- Node.js 16.x ou superior
- npm ou yarn
- Docker (opcional, para containerização)

## 🚀 Instalação

### Local

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/ProjetoFinal_To-Do.git
cd ProjetoFinal_To-Do

# Instalar dependências
npm install
```

### Docker

```bash
# Build da imagem
docker build -t todo-app .

# Executar container
docker run -it todo-app
```

## 💻 Uso

### Modo Desenvolvimento

```bash
npm run dev
```

Inicia a aplicação com reload automático em caso de mudanças.

### Modo Produção

```bash
npm start
```

### Executar Testes

```bash
npm test
```

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── index.js          # Aplicação principal com CLI
│   ├── app.js            # Lógica da aplicação TodoApp
│   └── test.js           # Suite de testes
├── .github/
│   └── workflows/
│       └── ci-cd.yml     # Pipeline CI/CD
├── Dockerfile            # Configuração Docker
├── .dockerignore         # Arquivos ignorados no Docker
├── .gitignore            # Arquivos ignorados no Git
├── package.json          # Dependências do projeto
└── README.md             # Este arquivo
```

## 🏗️ Arquitetura

### Classe TodoApp

Gerencia todas as operações relacionadas a tarefas:

```javascript
class TodoApp {
  // Adicionar tarefa
  addTodo(title, description)
  
  // Obter todas as tarefas
  getTodos()
  
  // Obter tarefa por ID
  getTodoById(id)
  
  // Marcar como concluída
  completeTodo(id)
  
  // Atualizar tarefa
  updateTodo(id, title, description)
  
  // Remover tarefa
  removeTodo(id)
  
  // Limpar concluídas
  clearCompleted()
  
  // Obter estatísticas
  getStats()
}
```

## 📊 Estrutura de Dados

Cada tarefa é um objeto com a seguinte estrutura:

```json
{
  "id": 1718476800000,
  "title": "Título da tarefa",
  "description": "Descrição opcional",
  "completed": false,
  "createdAt": "2024-06-15T10:00:00.000Z",
  "updatedAt": "2024-06-15T10:00:00.000Z"
}
```

## 🤖 GitHub Actions Workflow

O projeto inclui um pipeline CI/CD completo:

### Jobs Inclusos

1. **🧪 Testes** - Executa testes em Node 16, 18 e 20
2. **🔍 Lint** - Verifica sintaxe e qualidade do código
3. **🐳 Build Docker** - Constrói e publica imagem Docker
4. **🔐 Segurança** - Realiza audit de segurança
5. **📊 Qualidade** - Analisa com SonarCloud (opcional)
6. **📦 Release** - Cria automaticamente releases
7. **📢 Notificações** - Notifica sobre o status

### Triggeres

- Push nas branches `main` e `develop`
- Pull Requests para `main` e `develop`

## 🐳 Docker

### Build

```bash
docker build -t todo-app:latest .
```

### Run

```bash
# Modo interativo
docker run -it todo-app:latest

# Com volume para persistência
docker run -it -v $(pwd)/data:/app/data todo-app:latest
```

### Docker Compose (Opcional)

```yaml
version: '3.8'
services:
  todo-app:
    build: .
    container_name: todo-app
    stdin_open: true
    tty: true
    volumes:
      - ./data:/app/data
```

```bash
docker-compose up
```

## 🧪 Testes

A suite de testes inclui validações para:

- ✅ Criação de instância
- ✅ Adição de tarefas
- ✅ Busca por ID
- ✅ Marcar como concluída
- ✅ Atualização de tarefas
- ✅ Remoção de tarefas
- ✅ Limpeza de concluídas
- ✅ Estatísticas

## 📝 Menu da Aplicação

```
1. ➕ Adicionar nova tarefa
2. 📋 Listar todas as tarefas
3. ✅ Marcar tarefa como concluída
4. ✏️  Editar tarefa
5. 🗑️  Remover tarefa
6. 🧹 Limpar tarefas concluídas
7. 📊 Ver estatísticas
8. 🚪 Sair
```

## 🎯 Exemplos de Uso

### Adicionar Tarefa

```
Digite o título da tarefa: Aprender Docker
Digite a descrição: Estudar containerização com Docker
✨ Tarefa adicionada com sucesso! ID: 1718476800000
```

### Listar Tarefas

```
📋 MINHAS TAREFAS:
────────────────────────────────────────────────────────────────────────────
1. ⭕ [1718476800000] Aprender Docker
   └─ Estudar containerização com Docker
2. ✅ [1718476800001] ~Fazer exercícios~
────────────────────────────────────────────────────────────────────────────
📊 Total: 2 | ✅ Concluídas: 1 | ⏳ Pendentes: 1
```

## 🚀 Deployment

### GitHub Pages (com modificações)

```bash
npm run build
git add .
git commit -m "Deploy"
git push origin main
```

### Heroku

```bash
heroku create seu-app-name
heroku container:push web
heroku container:release web
```

### AWS / DigitalOcean / Azure

Use a imagem Docker publicada em `ghcr.io/seu-usuario/ProjetoFinal_To-Do`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido com ❤️ como projeto final

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do repositório.

## 🗺️ Roadmap

- [ ] Interface Web (Express.js + HTML/CSS)
- [ ] API REST completa
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Categorias e tags
- [ ] Prazos e lembretes
- [ ] Sincronização em nuvem
- [ ] App mobile (React Native)

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!
