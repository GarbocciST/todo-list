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

    //* input va el checked

  return (
    <>
        <li key={todo.id} className="list-group-item m-1 d-flex justify-content-between">
            
              <span className={`spann d-flex align-self-center ${(todo.done) && "text-decoration-line-through" }`} onClick={() => onMark(todo.id)}>{todo.description}</span>
            
            {/* <div className="mt-2">
              <input className="form-check-input" type="checkbox" /> 
            </div> */}
      
            <button onClick={ () => onDelete(todo.id) } className="btn btn-danger d-flex align-self-center">Borrar</button>  
        </li>
    </>
  )
}
