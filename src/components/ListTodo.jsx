import { ListItem } from "./";


export const ListTodo = ({todos = 0}) => {
  


  return (
      <div className="todos-container col-7 pt-2">
          <div className="todos">
            <ul className="list-group">
              {
                todos.map( todo => (
                  <ListItem key={todo.id} todo={todo}/>
                ))
              }
            </ul>
          </div>
      </div>
    

  )
}
