import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../store";

export const ListItem = ({todo}) => {

    const dispatch = useDispatch();

    const onDelete = (value) => {
      dispatch(deleteTodo(value));
    }

    const onMark = (value) => {
      dispatch(updateTodo(value));
    }

    //* input va el checked: checked={(todo.done)}

  return (
    <>
        <li key={todo.id} className="list-group-item m-1 d-flex align-items-center justify-content-between">
            
            <div>
              <input type="checkbox" onClick={() => onMark(todo.id)} defaultChecked={(todo.done)} className="form-check-input"/> 
              <span className={`spann ${(todo.done) && "text-decoration-line-through" }`}  >{todo.description}</span>
            </div>
                 
            <button onClick={ () => onDelete(todo.id) } className="btn btn-danger d-flex align-self-center">Borrar</button>  
        </li>
    </>
  )
}
