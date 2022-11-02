import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Get() {
  const [state, setState] = useState([]);
    let url ="https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"

  useEffect(() => {
    axios.get(url).then((res)=>{
        console.log(res.data);
        setState(res.data);
  })
}, [])

  return (
    <div className='api-container'> 
            {state.map(item=>{
                return(
                  <div className='img-container'>
                    <p><strong>ID: </strong>{item.id}</p>
                    <p><strong>First Name: </strong>{item.fName}</p>
                    <p><strong>Last Name: </strong>{item.lName}</p>
                    <p><strong>Email: </strong>{item.email}</p>
                    <p><strong>Password: </strong>{item.pass}</p>
                 </div>
                )
            })}
            

    </div>
  )
}
