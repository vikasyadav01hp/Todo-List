import React from 'react'; 
import { useState } from 'react';
import ListItem from './ListItem1';


function List() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState([])

  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  
  const handleClick=()=>{
    setValue2([...value2,{
      id:Date.now(),
      title:value,
      done:false
    }])
    setValue('')
  }
  const handleUpdate=(id)=>{
      let upd=value2.find((fl)=> fl.id=id)
      setValue(upd.title)
      setValue2(value2.filter((fli)=> fli.id!== id));
  }

  const handleDelete=(id)=>{
    setValue2(value2.filter((fli)=> fli.id!== id));
    console.log(id)
  }

  return (
    <div>
        <input value={value} onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
        <ListItem value={value2} delete={handleDelete} update={handleUpdate}/>
    </div>
  )
}
export default List;
