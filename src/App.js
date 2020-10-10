import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do list</h1>
      </header>
      <main>
        <ul>
          <li>
            <input type="checkbox" />
            Study
          </li>
          <li>Cook dinner</li>
          <li>Play Luigi's mansion</li>
        </ul>
        <input placeholder="Write a task" />
        <select>
          <option>Category</option>
          <option value="work">work</option>
          <option value="home">home</option>
        </select>
      </main>
    </div>
  )
}

export default App
