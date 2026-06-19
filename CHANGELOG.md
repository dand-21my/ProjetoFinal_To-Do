# 📝 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2024-06-15

### ✨ Adicionado
- Aplicação CLI interativa para gerenciamento de tarefas
- Funcionalidade de adicionar, listar, editar e remover tarefas
- Persistência de dados em arquivo JSON
- Suporte a marcar tarefas como concluídas
- Limpeza automática de tarefas concluídas
- Visualização de estatísticas de progresso
- Suite completa de testes (10 testes)
- Dockerização com multi-stage build
- GitHub Actions CI/CD pipeline
- Docker Compose para desenvolvimento
- Documentação completa em README
- Guia de contribuição
- Templates para issues (bug report, feature request)
- Análise de código com SonarCloud

### 📋 Estrutura
- `src/app.js` - Classe TodoApp com lógica principal
- `src/index.js` - Interface CLI interativa
- `src/test.js` - Suite de testes
- `Dockerfile` - Containerização otimizada
- `docker-compose.yml` - Ambiente de desenvolvimento
- `.github/workflows/ci-cd.yml` - Pipeline CI/CD
- `package.json` - Gerenciamento de dependências

### 🚀 Features Principais
- ➕ Adicionar tarefas com descrição
- 📋 Listar todas as tarefas
- ✅ Marcar tarefas como concluídas
- ✏️ Editar tarefas
- 🗑️ Remover tarefas
- 🧹 Limpar tarefas concluídas
- 📊 Ver estatísticas
- 💾 Persistência automática

---

## Próximas Versões (Roadmap)

### [1.1.0] - Planejado
- [ ] Interface Web com Express.js
- [ ] API REST completa
- [ ] Validação de entrada melhorada

### [1.2.0] - Planejado
- [ ] Banco de dados (MongoDB)
- [ ] Autenticação de usuários
- [ ] Categorias e tags

### [2.0.0] - Planejado
- [ ] Aplicação mobile
- [ ] Sincronização em nuvem
- [ ] Notificações e lembretes

---

[1.0.0]: https://github.com/dand-21my/ProjetoFinal_To-Do/releases/tag/v1.0.0
