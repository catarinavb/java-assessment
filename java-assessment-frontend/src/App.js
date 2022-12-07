import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Typography } from '@mui/material';
import SavePersonForm from './Components/SavePersonForm';
import PersonsTable from './Components/PersonsTable';
import { useState } from 'react';


function App() {

const [rows, setRows] = useState([]);
const [isTableDisplayed,setIsTableDisplayed]=useState(false);

  return (
    
  <>
  <Typography variant='h3' textAlign={"center"}>Java Assesment</Typography>
  <Grid container>
    <SavePersonForm setRows={setRows} setIsTableDisplayed={setIsTableDisplayed}/>
  </Grid>
  <Grid container >
  <Grid item  md={4} xs={4}> </Grid>
  <Grid item  >
    { isTableDisplayed && <PersonsTable rows={rows} setRows={setRows}/>}
    </Grid>
  </Grid>
  </>
  );
}

export default App;
