import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import logo from "../../images/Logo.png";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import ShoppingCartDrawer from "../ShoppingCartDrawer/ShoppingCartDrawer";
import "./MuiNavbar.css";

const pages = ["Home", "Shop", "About"];
// const settings = ["Profile", "Register", "Login", "Logout"];

const MuiNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { cartItems } = React.useContext(ShoppingCartContext);

  return (
    <AppBar position="static" className="muiNavbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" className="logo logoScreen" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            className="header_title"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: "white",
              },
            }}
          >
            House of Kickz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  href={("/" + page).toLowerCase()}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {page === "Home" ? <HomeIcon className="icons" /> : ""}
                  {page === "Shop" ? (
                    <ShoppingCartIcon className="icons" />
                  ) : (
                    ""
                  )}
                  {page === "About" ? <ContactsIcon className="icons" /> : ""}
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>
          <img src={logo} alt="Logo" className="logo logoMobile" />
          <Typography
            className="textMobile"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              "&:hover": {
                color: "white",
              },
            }}
          >
            House of Kickz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                href={("/" + page).toLowerCase()}
                key={page}
                onClick={handleCloseNavMenu}
                className="pages"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box className="shoppingCart">
            <Badge badgeContent={cartItems.length} color="error" max={99}>
              <ShoppingCartDrawer />
            </Badge>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    backgroundColor: "#628395",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Button href={("/" + setting).toLowerCase()} key={setting}>
                    {setting}
                  </Button>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MuiNavbar;
