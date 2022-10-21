import React from 'react';
import './App.css';
import Todo from './Todo'

let id = 0

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo = () => {
    let text = prompt('TODO please !')
    if (text === '') {
      alert('You can\'t add an empty todo !')
      text = prompt('Todo :')
    }
    console.log(text)
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    })
  }

  render() {

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>TODO Mind</h1>
        </header>
        <div className='App-controls'>
          <button className='btn btn-add' onClick={() => this.addTodo()}>+</button>
        </div>
        <div>
          <ul className='todo-list'>
            {this.state.todos.map((todo, key) => (
              <Todo
                key={key}
                todo={todo}
                onDelete={() => this.deleteTodo(todo.id)}
                onToggle={() => this.toggleTodo(todo.id)} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
