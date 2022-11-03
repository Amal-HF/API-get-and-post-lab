import React, {useState} from 'react'
import axios from 'axios'
import { useNavigation, useNavigate } from 'react-router-dom';

export default function Create() {
    // const [post, setPost] = useState()
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const navigate = useNavigate();

    let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"

    const postData = ()=>{
        axios.post(url, {
            fName,
            lName,
        }).then(res=>{
            // console.log(res.data)
            localStorage.setItem("fName",res.data.fName);
            localStorage.setItem("lName",res.data.lName);
            localStorage.setItem("id",res.data.id);
        })
        navigate("/Read");
    }
  return (
    <div className='login-form'>
        <input placeholder='first name' onChange={e=>{setFName(e.target.value)}}></input>
        <input placeholder='last name' onChange={e=>{setLName(e.target.value)}}></input>
        {/* <br/> {email} <br/> {pass} <br/> to ensure that they are working */}
        <button onClick={postData}>Login</button>
    </div>
  )
}
