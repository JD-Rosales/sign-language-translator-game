import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "src/layouts/Navbar";
import Sidebar from "src/layouts/Sidebar";

const index = () => {
  const isNoneMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box width="100%" height="100%" display={isNoneMobile ? "flex" : "block"}>
      <Sidebar
        isNoneMobile={isNoneMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default index;
