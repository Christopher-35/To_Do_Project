import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  
  //edit description function 

  const updateDescription = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, 
      {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/"
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
<button onClick={() => setDescription(todo.description)} type="button" className="btn bg-warning text-white" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

{/* <!-- The Modal --> */}
<div className="modal" id={`id${todo.todo_id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button onClick={() => setDescription(todo.description)} type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body"><input onChange={e => setDescription(e.target.value)} type='text' className='form-control' value={description}/>
        {/* Modal body.. */}
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
      <button onClick={e => updateDescription(e)} type="button" className="btn bg-warning text-white" data-dismiss="modal">
          Edit
        </button>
        <button onClick={() => setDescription(todo.description)} type="button" className="btn btn-danger" data-dismiss="modal">
          Close
        </button>
      </div>

    </div>
  </div>
  </div>
    </Fragment>
  )
}

export default EditTodo;