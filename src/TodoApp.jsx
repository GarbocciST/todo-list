import { useSelector } from 'react-redux'
import { AddTodo, ListTodo, TitleBar } from './components'

export const TodoApp = () => {

  
  const {todos} = useSelector(state => state.todos)

  return (
    <>  
      <TitleBar todos={todos} />

      <div className="row gx-0">
        <ListTodo todos={todos}/>
        <AddTodo />
      </div>
      
    </>
  )
}
