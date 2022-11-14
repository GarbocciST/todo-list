import { useDispatch } from "react-redux"
import { deleteTodo } from "../store";

export const ListItem = ({todo}) => {

    const dispatch = useDispatch();

    const onDelete = (value) => {
      dispatch(deleteTodo(value));
    }
  return (
    <>
        <li key={todo.id} className="list-group-item m-1 d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <button onClick={ () => onDelete(todo.id) } className="btn btn-danger">Borrar</button>  
        </li>
    </>
  )
}
