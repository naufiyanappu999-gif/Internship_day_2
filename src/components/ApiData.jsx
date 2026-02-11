import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiData = () => {
    var [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((chakka)=>{
            console.log(chakka)
        })
        .catch((error)=>{
            console.log(error)
            setUsers(res.data)
        })
    },[])


  return (
    <div>
      <Typography variant='h3'>welcome</Typography>
    </div>
  )
}

export default ApiData
