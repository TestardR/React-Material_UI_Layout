import React from "react";
import { Grid } from "@material-ui/core";

const ContentLayout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container direction="column">
        <Grid item>
          <div style={{ backgroundColor: "pink" }}>Menu Title</div>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </div>
  );
};

export default ContentLayout;
