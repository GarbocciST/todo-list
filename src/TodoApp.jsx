import { useSelector } from 'react-redux'
import { AddTodo, ListTodo } from './components'

export const TodoApp = () => {

  
  const {todos} = useSelector(state => state.todos)

  return (
    <>  
        <h1>TodoApp: {todos.length} 
          <small>activos: {todos.filter( todo => !todo.done).length}</small>
          <small className="text-muted">completados: {todos.filter( todo => todo.done).length}</small>
          </h1> 
        <hr />

        <div className="row gx-0">
            <ListTodo todos={todos}/>
            <AddTodo />
        </div>
       
    </>
  )
}
