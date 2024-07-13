import React, { useState } from 'react'
import './Home.css'
import 'react-datepicker/dist/react-datepicker.css'
import { addTask as addTaskAction } from '../../slices/customerSlice'
import {useDispatch} from 'react-redux'
const Home = () => {
  const [data,setData]=useState({
    name:'',
    date:'',
    time:''
  });
  const dispatch=useDispatch();
  
  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
  }
  
// useEffect(()=>{
//   console.log(data);
// },[data])

 function addTask(){
  if(data){
   dispatch(addTaskAction(data)) ;
    setData({
    name:'',
    date:'',
    time:''
    });
  }
  
 }
  
  return (
    <div className='input-container'>
      <div className="task-title">
        <input type="text" name='name' value={data.name} onChange={onChangeHandler} placeholder='Enter the task' />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="date-time">
        <input type="date" name='date' value={data.date} onChange={onChangeHandler}/>
        <input type="time" name='time' value={data.time} onChange={onChangeHandler}/>
      </div>
    </div>
  )
}

export default Home;