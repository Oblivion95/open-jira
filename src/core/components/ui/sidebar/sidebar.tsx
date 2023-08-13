import { ReactNode } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { InboxOutlined } from "@mui/icons-material";
import { useUIContext } from "@core/store/context/ui/ui.context";

type Props = {
  children: ReactNode;
};

const menuItems = ["Inbox", "Starred", "Send email", "Drafts"];

const Sidebar = ({ children }: Props) => {
  const { sidebarOpen, toggleSidebar } = useUIContext()

  return (
    <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
      <Box style={{ width: '250px' }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4" component="div">
            Menú
          </Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItem button key={text}>
                <ListItemIcon>
                  <InboxOutlined />
                </ListItemIcon>
                <ListItemText primary={text}></ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItem button key={text}>
                <ListItemIcon>
                  <InboxOutlined />
                </ListItemIcon>
                <ListItemText primary={text}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
