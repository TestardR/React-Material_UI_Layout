import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";
import ContentLayout from "./ContentLayout";
import Menu from "./Menu";

const PageLayout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container>
        <Grid sm={2}>
          <Menu />
        </Grid>
        <Grid sm={10}>
          <ContentLayout>{children}</ContentLayout>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageLayout;
