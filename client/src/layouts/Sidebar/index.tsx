import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  Dashboard,
  SportsEsports,
} from "@mui/icons-material";

// interface
import { sidebarInterface } from "src/model/sidebar/interface";

const sidebarItems = [
  {
    text: "Dashboard",
    icon: <Dashboard />,
  },
  {
    text: "Games",
    icon: <SportsEsports />,
  },
];

const index: React.FC<sidebarInterface> = ({
  isNoneMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {},
            // 1:12:42
          }}
        />
      )}
    </Box>
  );
};

export default index;
