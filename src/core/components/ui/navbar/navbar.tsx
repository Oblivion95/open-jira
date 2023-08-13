import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ReactNode } from "react";
import { useUIContext } from "@core/store/context/ui/ui.context";

interface Props {
  children: ReactNode;
}

const Navbar = () => {
  const { toggleSidebar } = useUIContext();

  return (
    <AppBar position="sticky" elevation={5}>
      <Toolbar>
        <IconButton edge="start" onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
