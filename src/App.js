import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './components/navbar/navbar';
import Cortex from './components/cortex/cortex';

function App() {
  return (
    <Grid container>
      <Grid item xs = {12}>
      <Navbar/>
      <Cortex/>
      </Grid>
      
      
      </Grid>
  );
}

export default App;
