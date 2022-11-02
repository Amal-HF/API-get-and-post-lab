import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Create from './Components/Create';
import Get from './Components/Get';

function App() {

  return (
    <div className="App" >
      <Create/>
      <Get/>
    </div>
  );
}

export default App;
