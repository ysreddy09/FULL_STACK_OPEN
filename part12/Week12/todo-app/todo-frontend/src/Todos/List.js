import axios from 'axios'
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }
  
  return (
    <>
      {todos
        .map(todo => <Todo key={todo._id} todo={todo} onClickComplete={() => onClickComplete(todo)} onClickDelete={() => onClickDelete(todo)}></Todo>)
        .reduce((acc, cur) => [...acc, <hr key={"hr" + cur.props.todo._id}/>, cur], [])}
    </>
  )
}

export default TodoList
