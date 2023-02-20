import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "src/features/theme/themeSlice";

// interface
import { navbarInterface } from "src/model/navbar/interface";

const index: React.FC<navbarInterface> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton>
            <MenuIcon />
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
            sx={{ background: theme.palette.background.paper }}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1.5rem"
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default index;
