import React, { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo , updateTodo  } from "../api";


const priorities=["High","Medium","Low"];
const TodoList = ({ user , users }) => {
  const [todos, setTodos] = useState([]);
  const [title , setTitle ] = useState("")
  
  const [description , setDescription] = useState("")
  const [priority , setPriority] = useState("low")
  const [aponted , setApointed] = useState([])
  const [popUp , setPopUp] = useState(null)
  const [upd , setUpd] = useState("")
  const [trigger , setTrigger] = useState(0)
  const [names , setNames] = useState([])




  useEffect(() => {
    getTodos(user._id).then((res) => setTodos(res.data));
  }, [user , trigger]);




  const resetF = () => {
    setTitle("")
    setDescription("")
    setPriority("low")
    setApointed([])
    setPopUp(null)
    setUpd("")
    setNames([])
  }


  const addTodo = async () => {
    try {
      const value = { title : title , description : description ,  priority : priority, assignedTo : aponted , createdBy : user._id }
      const newTodo = await createTodo(value)
      console.log(newTodo)
      setTodos([...todos, newTodo.data]);

    } catch (error) {
      console.log(error)
    } finally {
    resetF()
    }
    
  };

  const delTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const updat = async (id) => {
    const res = await updateTodo( id ,  { title : title , description : description ,  priority : priority, assignedTo : aponted , createdBy : user._id });
    setTrigger(trigger + 1)
    resetF()
  };

  

  return (
    <div className="w-full h-[100vh] pt-20 relative " > 
      <button  className="absolute top-16 right-10 p-2 px-3 py-2 bg-red-500 text-white "  onClick={() => setPopUp("add")}>Add Todo</button>

      {popUp !== null && (
        <div className="modal">
          <div>
            <h2>Create New Todo</h2>
            <input 
             type="text"
             placeholder="Title"
             value={title}
             required
             onChange={(e) => setTitle(e.target.value)}
           />
          <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Priority:</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select value={priority} onChange={(e) => {
              setApointed([...aponted , e.target.value])
            }}>
              {users.map ((item , idx) => {
               return <option key={idx} value= {item._id}  >{item.username}</option>
              })}
            </select>
           <div>
            <button onClick={() => resetF()} >Cancel</button>
            <button onClick={() => {
              if(popUp === "add") {
                addTodo()
              } else {
                updat(upd)
              }
            }}>Save</button>
            </div>
            </div>
        </div>
      )}
    <div className="h-[80%] w-full flex flex-col items-center justify-center overflow-y-auto">{todos.map((todo) => (
        <div className="w-[80%] p-4 shadow shadow-gray-300 " key={todo._id}>
          <div className="w-full flex items-center justify-start gap-2 text-xl">
            <h3>Title : </h3>
            <h3>{todo.title}</h3>
          </div>
          <div className="w-full flex items-center justify-start gap-2 ">
            <h3>Description:</h3>
            <p>{todo.description ? todo.description : ""}</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2 ">
            <h3>Priority:</h3>
            <p>{todo.priority ? todo.priority : ""}</p>
            </div>
          
            <div className="w-full flex items-center justify-end gap-4 "> <button className=" p-2 px-3 py-2 bg-red-600 text-white " onClick={() => delTodo(todo._id)}>Delete</button>
            <button
            className=" p-2 px-3 py-2 bg-gray-500 text-white "
             onClick={() => {
              setPopUp("update")
              setTitle(todo.title)
              setDescription(todo.description)
              setPriority(todo.priority)
              setApointed(todo.assignedTo)
              setUpd(todo._id)


            }}>Edit</button>


            </div>
      
         
        </div>
      ))}</div>
      
    </div>
  );
};

export default TodoList;

