import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function Update() {

  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [id, setID] = useState("");
  let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList";

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setFName(localStorage.getItem("fName"));
    setLName(localStorage.getItem("lName"));
  
  }, []);
  
  const updateData = () =>{
    axios.put(`${url}/${id}`,{
      fName,
      lName,
    }).then (res => {
      console.log(res);
      navigate("/Read");
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='login-form'>
        <input placeholder='first name' onChange={e=>{setFName(e.target.value)}}></input>
        <input placeholder='last name' onChange={e=>{setLName(e.target.value)}}></input>
        <button onClick={updateData}>update</button>
    </div>
  )
}

export default Update