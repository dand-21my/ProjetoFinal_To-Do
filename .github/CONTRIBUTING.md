# 🤝 Guia de Contribuição

Obrigado por seu interesse em contribuir para o To-Do List App! Este documento fornece diretrizes e instruções para contribuir.

## 📋 Código de Conduta

Todos os colaboradores devem seguir nosso código de conduta baseado em respeito, inclusão e profissionalismo.

## 🚀 Como Contribuir

### Reporting Bugs

1. Use o GitHub Issues para reportar bugs
2. Inclua título descritivo e claro
3. Forneça descrição detalhada do problema
4. Inclua passos para reproduzir
5. Especifique versão do Node.js e SO

### Sugerindo Enhancements

1. Use GitHub Issues para sugestões
2. Descreva claramente o caso de uso
3. Liste exemplos de como a funcionalidade seria usada
4. Mencione produtos similares que tenham a feature

### Pull Requests

1. Fork o repositório
2. Crie uma branch com um nome descritivo (`feature/minha-feature`)
3. Commit suas mudanças com mensagens claras
4. Push para sua fork
5. Abra um Pull Request contra a branch `main`

## 💻 Desenvolvimento Local

```bash
# Clone sua fork
git clone https://github.com/seu-usuario/ProjetoFinal_To-Do.git

# Crie uma branch
git checkout -b feature/sua-feature

# Instale dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Execute testes
npm test
```

## ✅ Checklist para Pull Requests

- [ ] Código segue o estilo do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Commit messages são claras e descritivas
- [ ] Nenhuma quebra de funcionalidade existente

## 🎨 Estilo de Código

- Use 2 espaços para indentação
- Use `const` por padrão, `let` quando necessário
- Nomes de variáveis em camelCase
- Nomes de classes em PascalCase
- Adicione comentários para lógica complexa

## 📝 Mensagens de Commit

Siga este formato:

```
<tipo>(<escopo>): <assunto>

<corpo>

<rodapé>
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Build, dependências

### Exemplo

```
feat(todo): adicionar suporte a categorias

Permite que usuários adicionem categorias às suas tarefas
para melhor organização.

Closes #123
```

## 🧪 Testes

- Sempre adicione testes para novas funcionalidades
- Mantenha cobertura de testes acima de 80%
- Execute `npm test` antes de fazer push

## 📚 Documentação

- Atualize README.md para mudanças significativas
- Adicione comentários em código complexo
- Atualize CHANGELOG.md

## 🚀 Processo de Review

1. Um mantenedor revisará seu PR
2. Podem ser solicitadas mudanças
3. Uma vez aprovado, será merged na branch principal

## ❓ Perguntas?

- Abra uma issue para discussão
- Verifique issues e PRs existentes
- Entre em contato com mantenedores

---

Obrigado por contribuir! 🙌
