import React, { useEffect } from 'react'
import './Landing.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { addTask,getTask,deleteTask } from '../services/allApi'




function Landing() {
  const [todo,setTodo]=useState([])
  const[data,setData]=useState({Title:""})
  const getAlltasks=async()=>{
    const res=await getTask()
    // console.log(res);
    setTodo(res.data)
  }
  useEffect(()=>{
    getAlltasks()
  },[])
  
  console.log(data)
  const submitForm=async()=>{
    const {Title}=data
    if(!Title){
      console.log(Title)
      toast.error("Enter some task!")
    }
    else{
      const taskview=await addTask(data)
    console.log(taskview);
  
  
     
    //  console.log(taskview);
     if(taskview.status==201){
      toast.success(
       "Task added successfuly"
      )
      getAlltasks()
     
     }
     else{
toast.error("Something went wrong")
     }
    }

  } 
  // console.log(data);
  const remTask=async(id)=>{
    // console.log(id);
    const res=await deleteTask(id)
    console.log(res);
    getAlltasks()
  }
  return (
    <div>
     
      <div className="container ">
        <h1>To-Do List</h1>
        <div >
        
            <input type="text" id="new-todo" onChange={(e)=>{setData({...data,Title:e.target.value})}}  placeholder="Enter a new task" required/>
            <button  onClick={submitForm}>Add</button>
            
        
        </div>
        
       {todo.length>0?
       <div>
        {
          todo.map((item)=>(
            <ul id="todo-list">
       <li>{item.Title} <span><button onClick={()=>{remTask(item.id)}} className='btn-danger ms-3' type="s">Delete</button></span></li>
       </ul>
          ))
        }
        
       </div>
       
       :


       <h3>no pending task</h3>
      } 

        
       
    </div>
    </div>
  )
}

export default Landing
