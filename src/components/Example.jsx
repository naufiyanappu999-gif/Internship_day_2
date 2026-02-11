import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Example = () => {
    var[val,setVal]=useState()
    var[home,setOut]=useState()
    const Home=()=>{
    setOut("HOME")
    }
    const About=()=>{
    setOut("ABOUT AS")
    }
    const contact=()=>{
    setOut("CONTACT")
    }
  return (
    <div style={{marginLeft:'30%',marginTop:'5%'}}>
      <Typography variant='h4'>WELCOME TO {home}</Typography>
      <br /><br /><br />
      <Button variant='contained' color='secondary' onClick={Home}>Home</Button> &nbsp;&nbsp;
            <Button variant='contained' color='success' onClick={About}>about us</Button> &nbsp;&nbsp;
                  <Button variant='contained' color='error' onClick={contact}>contact</Button> &nbsp;&nbsp;
    </div>
  )
}

export default Example
