
import { useState } from "react"
import React from 'react'

export default function ListItem(props) {
    const [check, setCheck] = useState(false)
    const handleCheckbox=(e)=>{
            setCheck(e.target.checked?true:false);
    }

    return (
            <div className="card">
                <div className="card-body">
                    {
                        props.value.map((ei,i)=>
                            (
                                <div key={ei.id}>
                                    <input  type='checkbox' onChange={handleCheckbox}></input>
                                    <li>{ei.title}</li>
                                    <span>{check ? "completed": "Not completed"}</span>
                                    <button onClick={()=>props.update(ei.id)}>Update</button>
                                    <button onClick={()=>props.delete(ei.id)}>Delete</button><br></br>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
    )
}
