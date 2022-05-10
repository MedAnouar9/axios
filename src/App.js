import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList'

function App () {

  const [userList,setUserList]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{ setUserList(res.data)
    },[] )
  })



  return (
    <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around',alignItems:'center',}}>
     
       
       { userList.map((e)=>( < UserList user={e}/>))}
     
     
    </div>
  )
}

export default App