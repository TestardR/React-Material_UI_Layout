import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import { Grid } from "@material-ui/core";
import MenuTitle from "./MenuTitle";
import PageHeader from "./PageHeader";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item sm={2}>
          <MenuTitle
            style={{
              padding: 20,
              marginTop: 10,
              marginBottom: 10,
              marginRight: 10
            }}
          />
        </Grid>
        <Grid item sm={10}>
          <PageHeader
            style={{
              padding: 20,
              marginTop: 10,
              marginBottom: 10,
              marginRight: 10
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={2}>
          <Menu
            style={{
              padding: 20,
              marginBottom: 10,
              marginRight: 10,
              minHeight: "100vh"
            }}
          />
        </Grid>
        {children}
      </Grid>
    </div>
  );
};

export default BaseLayout;
