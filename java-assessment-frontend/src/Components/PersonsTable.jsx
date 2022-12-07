import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(id, firstName, lastName, phoneNumber, email) {
    return { id, firstName, lastName, phoneNumber, email };
  }

const PersonsTable = ({rows, setRows}) => {

    useEffect(()=>{
        axios.get('http://localhost:8081/person/').then((response) => {
            setRows(response.data);
        })
    }, []);

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Phone Number</TableCell>
          <TableCell align="right">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="right">{row.lastName}</TableCell>
            <TableCell align="right">{row.phoneNumber}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PersonsTable