import React, { useState } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const MainLayout = () => {
    const [total, setTotal] = useState(0)
    const [done, setDone] = useState(0)
    const [input, setInput] = useState('')
    const [tasks, setTask] = useState([])
    const [doneTasks, setDoneTasks] = useState([])
    
    function handleChange(e) {

      setInput(e.target.value)
  }

  function addTask(e) {
      e.preventDefault()

      // add Task
      setTask([...tasks, {text: input, isDone: false, isDeleted: false}])



      // empty input
      setInput('')

      setTotal(total + 1)

  }

  function handleDone(index) {
    setTask(tasks.map((task, i) => {
        if (i === index) {
            // Toggle the `isDone` status of the task
            const updatedTask = { ...task, isDone: !task.isDone };
            
            // Update the done count accordingly
            setDone(done + (updatedTask.isDone ? 1 : -1));

            if(updatedTask.isDone) {

              setDoneTasks([...doneTasks, updatedTask])

            }else {
              
              setDoneTasks(doneTasks.filter((_, doneIndex) => doneIndex !== index))
            }

          
            
            return updatedTask;
        }
        return task;
    }));
}

function handleDelete(index) {

  setTask(tasks.filter((task, i) => i !== index));

  setTotal(total - 1)
}

function handleDoneDelete(index) {

  
    
  setDoneTasks(doneTasks.filter((doneTask, i) =>  i !== index))

  setDone(done - 1)
}

 
  return (
    <>
    <Header />
    <Outlet context={{input,  tasks, handleChange, addTask, handleDone, handleDelete, handleDoneDelete, doneTasks}} />
    <Footer total ={total} done={done}/>
    </>
  )
}

export default MainLayout