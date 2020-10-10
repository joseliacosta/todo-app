import React from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
  const list = [
    'Laundry',
    'Cook dinner',
    'Study hooks',
    'send PR to Hacktober Fest',
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do list</h1>
        <Filter />
      </header>
      <main>
        <Tasks list={list} />
        <Form />
      </main>
    </div>
  )
}

export default App
