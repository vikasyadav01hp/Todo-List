import React,{useState} from 'react';

export default function ListItem(props) {
    const [checkbox, setCheckbox] = useState(false)
    const handleCheckbox=(e)=>{
        setCheckbox(e.target.checked ? true:false)
    }

    return (
            <div className="card">
                <div className="card-body">
                    {
                        props.value.map((ei,i)=>
                            (
                                <div key={ei.id}>
                                    <input  type='checkbox' onClick={handleCheckbox}></input>
                                    <li>{ei.title}</li>
                                    <span>{checkbox ? "completed": "Not completed"}</span>
                                    <button onClick={()=>{}}>Update</button>
                                    <button onClick={()=>props.delete(ei.id)}>Delete</button><br></br>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
    )
}
