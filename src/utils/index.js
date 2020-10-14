const filterTodos = (todos, category) => {
  return todos.filter((todo) => todo.category === category)
}

export { filterTodos }
