import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
    var increment = () => {
        setCount(count+1);
    }

    var decrement =()=>{

        setCount(count-1);

    }

  return (
    <div style={{marginLeft:'40%',marginTop:'15%'}}>
      <Typography variant="h3">count{count}</Typography>

    <Button variant='contained' color='success' onClick={increment}>+</Button> &nbsp;&nbsp;
    <Button variant='contained' color='error' onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
