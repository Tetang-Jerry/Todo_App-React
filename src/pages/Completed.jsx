import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Completed = () => {
    const { doneTasks, handleDoneDelete } = useOutletContext()
    return (
        <main className='min-h-[77vh] pb-10'>
            <div>
                <h1 className='text-center text-5xl py-5 font-semibold'>Completed Tasks</h1>
                <ul className='list-item'>
                    {doneTasks.length > 0 ? (
                        doneTasks.map((doneTask, index) => (
                           <div className='h-24 mx-auto justify-between  place-items-center w-[200px] py-10 shadow-lg shadow-gray-700 rounded-md my-5 flex px-5'>
                             <li  key={index}>{doneTask.text}</li>

                             <button onClick={() => handleDoneDelete(index)} className='px-5 py-3 hover:bg-red-800 transition-all duration-300 ease-in-out rounded-full bg-red-500'>X</button>
                           </div>
                            
                        ))
                    ) : (
                        <li className='text-center pt-32 text-xl'>No completed tasks yet</li>
                    )}
                </ul>
            </div>
        </main>
    )
}

export default Completed