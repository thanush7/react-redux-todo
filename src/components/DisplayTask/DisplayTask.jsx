import React from 'react'
import './DisplayTask.css'
import { deleteTask } from '../../slices/customerSlice'
import { useDispatch,useSelector } from 'react-redux'
const DisplayTask = ({ name, date, time,index }) => {
    
    // const tasks = useSelector((state) => state.customers)
    const dispatch=useDispatch();
    
    const deleteHandler=(index)=>{
       dispatch(deleteTask(index))
    }
     
    return (
        <div className='task-display'>
            <div className='task-list'>
                <div>{name}</div>
                <div>{date}</div>
                <div>{time}</div>
            </div>
            <div className='button-er'>
                <button onClick={()=>deleteHandler(index)}>Remove</button>
            </div>
        </div>
    )
}

export default DisplayTask