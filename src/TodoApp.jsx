import { useSelector } from 'react-redux'
import { AddTodo, ListTodo } from './components'

export const TodoApp = () => {

  
  const {todos} = useSelector(state => state.todos)

  return (
    <>  
        <h1>TodoApp: {todos.length} <small>activos: 2</small></h1>
        <hr />

        <div className="row">
            <ListTodo todos={todos}/>
            <AddTodo />
        </div>
       
    </>
  )
}
