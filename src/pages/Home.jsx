import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { input, tasks, handleChange, addTask, handleDone, handleDelete } = useOutletContext();

    // const sortedTasks = tasks.slice().sort((a,b)=>Number(b.isDone) - Number(a.isDone))

    return (
        <main className='min-h-[77vh] pb-10'>
            <div className='flex mx-auto px-10 mb-10 justify-center'>
                <form className='h-32 flex place-items-center px-5 py-10 shadow-lg shadow-gray-700 rounded-md w-[1000px]'>
                    <input onChange={handleChange} placeholder='Add a task...' className='h-full bg-white w-[80%] px-5 text-xl' type="text" value={input} />
                    <button onClick={addTask} className='h-full hover:bg-yellow-500 transition-all duration-300 ease-in-out bg-yellow-300 text-2xl rounded-md w-[20%]'>Add</button>
                </form>
            </div>

            <div id='showTask' className='flex gap-3 mx-auto flex-col justify-center'>
                {tasks && tasks.map((task, index) => (
                    <div 
                        key={index} 
                        className={`task h-24 mx-auto justify-between flex place-items-center px-5 py-10 shadow-lg shadow-gray-700 rounded-md w-[1000px] `}
                    >
                        <p className={`text-xl font-semibold ${task.isDone ? 'line-through text-gray-500' : ''}`}>
                            {task.text}
                        </p>
                        <div className='flex gap-10'>
                        <button onClick={() => handleDelete(index)} className='px-7 py-3 hover:bg-red-800 transition-all duration-300 ease-in-out rounded-full bg-red-500'>X</button>
                        <button 
                            className={`px-4 py-5 rounded-md hover:bg-yellow-500 transition-all duration-300 ease-in-out bg-yellow-300 ${task.isDone ? 'bg-yellow-800 hover:bg-yellow-800' : ''}`}
                            onClick={() => handleDone(index)}
                            disabled = {task.isDone}
                        >
                            {task.isDone ? 'Done' : 'Done'}
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home