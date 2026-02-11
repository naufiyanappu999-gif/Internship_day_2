import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const DataTable = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Rollno</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableCell>Krishna</TableCell>
                <TableCell>Kannur</TableCell>
                <TableCell>23</TableCell>
                <TableCell>12</TableCell>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
