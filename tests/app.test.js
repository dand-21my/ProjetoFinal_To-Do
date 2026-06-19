const fs = require('fs');
const TodoApp = require('../src/app');

jest.mock('fs');

describe('TodoApp', () => {
  beforeEach(() => {
    fs.existsSync.mockClear();
    fs.readFileSync.mockClear();
    fs.writeFileSync.mockClear();
    fs.existsSync.mockReturnValue(false);
    fs.readFileSync.mockReturnValue('[]');
  });

  test('deve adicionar uma tarefa e salvar no arquivo', () => {
    const todoApp = new TodoApp();
    const todo = todoApp.addTodo('Comprar leite', 'Leite integral');

    expect(todo).toEqual(
      expect.objectContaining({
        title: 'Comprar leite',
        description: 'Leite integral',
        completed: false,
      })
    );
    expect(todoApp.getTodos()).toHaveLength(1);
    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining('"title": "Comprar leite"')
    );
  });
});
