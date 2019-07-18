import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Grid } from '@material-ui/core';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container>
        <Sidebar
          style={{
            minHeight: '100vh',
            padding: 20,
            marginTop: 10,
            marginBottom: 10
          }}
        />
        <Grid item sm={10}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default BaseLayout;
