import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const classes = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Sidebar = ({ style }) => {
  return (
    <Grid item sm>
      <Paper style={style}>Left Pane</Paper>
    </Grid>
  );
};

export default Sidebar;
