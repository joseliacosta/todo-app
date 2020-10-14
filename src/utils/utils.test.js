import { filterTodos } from '.'

describe('Filter tasks', () => {
  test('should return 2 items when receive an array with 4 todos and filter by work category', () => {
    const todosMock = [
      {
        text: 'Learn about React',
        category: 'work',
        isCompleted: false,
      },
      {
        text: 'Do laundry',
        category: 'home',
        isCompleted: false,
      },
      {
        text: 'Build really cool todo app',
        category: 'work',
        isCompleted: false,
      },
      {
        text: 'Meditation',
        category: '',
        isCompleted: false,
      },
    ]
    expect(filterTodos(todosMock, 'work')).toHaveLength(2)
  })
})
