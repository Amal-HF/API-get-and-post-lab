import React, {useEffect, useState}  from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


function Read() {
    const [state, setState] = useState([]);
    let url ="https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"
    

  useEffect(() => {
    axios.get(url).then((res)=>{
        setState(res.data);
     })
    }, [])


    // Delete
    const onDelete = (id) => {
        axios.delete(`${url}/${id}`).then(res =>{
            console.log(res);
            setState(state.filter(del => {
                return del.id = id
            }))
        })
    }

  return (
    <div className='api-container'> 
            {state.map((item,index)=>{
                return(
                  <div className='img-container' key={index}>
                    <p><strong>ID: </strong>{item.id}</p>
                    <p><strong>First Name: </strong>{item.fName}</p>
                    <p><strong>Last Name: </strong>{item.lName}</p>
                    <button onClick={()=>{onDelete(item.id)}}>Delete</button>
                    <Link to='/Update'><button>Update</button></Link>
                 </div>
                )
            })}

    </div>
  )
}

export default Read