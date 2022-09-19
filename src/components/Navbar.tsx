import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "none",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { sm: "block", xs: "none" } }} variant="h6">
          FRANCESCO B.
        </Typography>
        <Pets sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{ height: 30, width: 30 }}
            onClick={() => setOpen(!open)}
          />
        </Icons>
        <UserBox>
          <Avatar
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{ height: 30, width: 30 }}
            onClick={() => setOpen(!open)}
          />
          <Typography variant="body1">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        onClose={() => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
