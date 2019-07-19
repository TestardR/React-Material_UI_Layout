import React from "react";
import { Grid, Paper } from "@material-ui/core";

const classes = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Menu = ({ style }) => {
  return (
    <Grid item sm>
      <Paper style={style}>Menu Component</Paper>
    </Grid>
  );
};

export default Menu;
