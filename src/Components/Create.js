import React, {useState} from 'react'
import axios from 'axios'

export default function Create() {
    // const [post, setPost] = useState()
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"

    const postData = ()=>{
        axios.post(url, {
            fName,
            lName,
            email,
            pass,
        }).then((res)=>{
            console.log(res.data)
        })
    }
  return (
    <div className='login-form'>
        <input placeholder='first name' onChange={e=>{setFName(e.target.value)}}></input>
        <input placeholder='last name' onChange={e=>{setLName(e.target.value)}}></input>
        <input placeholder='Email' onChange={e=>{setEmail(e.target.value)}}></input>
        <input placeholder='Password' onChange={e=>{setPass(e.target.value)}}></input>
        {/* <br/> {email} <br/> {pass} <br/> to ensure that they are working */}
        <button onClick={postData}>Login</button>
    </div>
  )
}
