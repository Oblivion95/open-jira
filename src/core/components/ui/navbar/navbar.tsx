import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={5}>
      <Toolbar>
        <IconButton edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
