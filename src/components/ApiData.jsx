import { Typography } from '@mui/material'
import axios from 'axios'
import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ApiData = () => {
    var [users,setUsers]=useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((chakka)=>{
            console.log(chakka)
            setUsers(chakka.data)
        })
        .catch((error)=>{
            console.log(error)
            
        })
    },[])


  return (
    <div>
      <Typography variant='h3'>welcome to user page</Typography>
      <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>id</TableCell>
                          <TableCell>name</TableCell>
                          <TableCell>username</TableCell>
                          <TableCell>email</TableCell>
                          <TableCell>address</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                     {users.map((val,i)=>{
      
                      return(
      
                        <TableRow key={i}> 
                          <TableCell>{val.id}</TableCell>
                          <TableCell>{val.name}</TableCell>
                          <TableCell>{val.username}</TableCell>
                          <TableCell>{val.email}</TableCell>
                          <TableCell>{val.address.city}</TableCell>
                        </TableRow>
      
                      )
                     })}
                  </TableBody>
              </Table>
            </TableContainer>
    </div>
  )
}

export default ApiData
