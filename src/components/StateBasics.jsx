import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const  StateBasics= () => {


     var name='naufiya'
     var car='benz'
     //usestate hook
    // var[varname,functionname]=useState("myVariable")
    var[myCar,setMyCar]=useState("ciaz")
    var[input,setInput]=useState()
    var [out,setOut]=useState()
    const changeName=()=>{
        setMyCar("benz")
    }



    const inputVal=(e) =>{

        console.log(e.target.value);
        setInput(e.target.value)
    }


    const addName=()=>{
        setOut(input);
    }

     return (
    <div style={{marginTop:"2%",marginLeft:"40%"}}>
        <Typography variant='h3'>Welcome {myCar}</Typography>
        <Button variant='contained' onClick={changeName}>Change</Button>
        <Button variant='contained' onClick={()=>{setMyCar("Aura")}}>Switch</Button>
    <br /><br /><br /><br />
    <Typography variant='h3'>Hello {out}</Typography>
    <TextField variant='outlined' label='Input your name' onChange={inputVal}/>
    <br /><br /><br /><br />

    <Button variant='contained' onClick={addName}>add</Button>
    </div>
  )
}

export default StateBasics
