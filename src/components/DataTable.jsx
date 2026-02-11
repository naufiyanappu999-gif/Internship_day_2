import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const DataTable = () => {
  var mca=[{name:'naufiya',place :'Aluva',rn:1},
           {name:'sanmaya',place :'kannur',rn:2},
           {name:'aaliya',place :'paravur',rn:3}
  ]
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Rollno</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {mca.map((val,i)=>{

                return(

                  <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.place}</TableCell>
                    <TableCell>{val.rn}</TableCell>
                  </TableRow>

                )
               })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
