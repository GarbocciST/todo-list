

export const TitleBar = ({todos}) => {
  return (
    <>
        <h1>TodoList: {todos.length} 
            <small>activos: {todos.filter( todo => !todo.done).length}</small>
            <small className="text-muted">completados: {todos.filter( todo => todo.done).length}</small>
        </h1> 
        <hr />
    </>
  )
}
