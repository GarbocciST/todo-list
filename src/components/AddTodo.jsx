import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/';
import { createTodo } from '../store';


export const AddTodo = () => {

    const {todos, isLoading} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onNewTodo = () => {
        const id = new Date().getTime();
        dispatch(createTodo({description : description, id: id, done: false}))
        onResetForm();
    }

    const onSubmitted = (event) => {
        event.preventDefault();
        if (description.trim().length >= 4) {
            onNewTodo();
            
        } else{ 
            return 

        }
        
    };

    const isFormValid = (description.trim().length >= 4);
    

  return (

    <div className="add col-5 pt-5">
        <form action="" onSubmit={onSubmitted} >
            <input type="text" onChange={onInputChange} value={description} name="description" className="form-control" placeholder="Agregar nueva tarea..."/>
            {
               (!isFormValid) ? <div className="alert alert-warning m-1">Debe tener al menos 4 caracteres</div> : ""           
            }
            <div className="d-flex justify-content-center pt-1">
                <button className="btn btn-primary">Agregar</button>
            </div>
        </form> 
    </div>
    
  )
}
