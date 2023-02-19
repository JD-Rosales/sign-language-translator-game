import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const sidebarItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Games",
    icon: <SportsEsportsIcon />,
  },
];

const index = () => {
  return (
    <Box component="nav">
      <Drawer></Drawer>
    </Box>
  );
};

export default index;
