import React from "react";
import Header from "./Header";
import PageLayout from "./PageLayout";

const BaseLayout = ({ children }) => {
  return (
    <div style={{ position: "fixed", minWidth: "100vw" }}>
      <Header />
      <PageLayout>{children}</PageLayout>
    </div>
  );
};

export default BaseLayout;
