import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Menu = () => {
  return (
    <List
      component="nav"
      style={{ backgroundColor: "yellow", minHeight: "100vh" }}
      aria-label="Main mailbox folders"
    >
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};

export default Menu;
