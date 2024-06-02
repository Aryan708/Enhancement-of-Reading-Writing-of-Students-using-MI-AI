import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { user } from "../common/Common";
const pages = ["Products", "Pricing", "Blog"];

export const AppLoginNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}> */}
      <AppBar position="fixed" style={{ background: "white", boxShadow: "" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to={"/"}>
              <img
                src="src\assets\fluentu1.jpg"
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"logo"}
                loading="lazy"
                style={{ width: "164px", height: "45px" }}
              />
            </Link>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0.2, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => {
                  navigate("/teacherLogin");
                }}
                sx={{ my: 2, color: "black", display: "block", mx: 3 }}
              >
                Teacher
              </Button>
              <Button
                onClick={() => {
                  navigate("/studentLogin");
                }}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Student
              </Button>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="success"
                style={{ marginRight: "20px" }}
              >
                Login
              </Button>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export const AppStudentsNavbar = ({ nav }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDashboard = () => {
    setAnchorElUser(null);
    navigate("/studentDashboard");
  };

  const handleTeacherDashboard = () => {
    setAnchorElUser(null);
    navigate("/teacherDashboard");
  };

  const handleTeacherProfile = () => {
    setAnchorElUser(null);
    navigate("/teacherProfile");
  };

  const handleStudentProfile = () => {
    setAnchorElUser(null);
    navigate("/studentProfile");
  };

  const StudentsRemarks = () => {
    handleCloseUserMenu();
    navigate("/studentRemarks");
  };

  const StudentsLeaderBoard = () => {
    handleCloseUserMenu();
    navigate("/leaderBoard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout Successfully");
    window.location.assign("/");
    handleCloseUserMenu();
  };
  return (
    <>
      {/* <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}> */}
      <AppBar
        position="fixed"
        style={{ background: nav ? "white" : "lightGreen" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {nav ? (
              <Link to={"/"}>
                <img
                  src="/src/assets/fluentu2.png"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{
                    width: "164px",
                    height: "70px",
                    borderRadius: 20,
                    paddingTop: "3px",
                  }}
                />
              </Link>
            ) : (
              <Link to={"/"}>
                <img
                  src="/src/assets/fluentu3.png"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{
                    width: "164px",
                    height: "80px",
                    borderRadius: 20,
                    paddingTop: "3px",
                  }}
                />
              </Link>
            )}
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
              style={{ marginRight: "20px" }}
            >
              {user === null && (
                <Button
                  variant="text"
                  style={{ marginRight: "20px", color: "black" }}
                  onClick={() => {
                    navigate("/studentlogin");
                  }}
                >
                  For Teacher
                </Button>
              )}
              {user === null && (
                <Button
                  variant="text"
                  style={{ marginRight: "20px", color: "black" }}
                  onClick={() => {
                    navigate("/studentregister");
                  }}
                >
                  For Students
                </Button>
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* <Button
                variant="contained"
                color="success"
                style={{ marginRight: "20px" }}
              >
                Login
              </Button> */}
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "white" }}
                >
                  {nav ? (
                    user && (
                      <Avatar alt="No Image">
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {user && user.name
                            ? user.name.charAt(0).toUpperCase()
                            : ""}
                        </Typography>
                      </Avatar>
                    )
                  ) : user ? (
                    <span>Welcome {user.name.toUpperCase()}</span>
                  ) : (
                    ""
                  )}
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
                {/*Dashboard, Profile For Teachers  */}
                {user && user.name === "teacher" && (
                  <MenuItem onClick={handleTeacherDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                )}
                {/* {user && user.name === "teacher" && (
                  <MenuItem onClick={StudentsRemarks}>
                    <Typography textAlign="center">Remarks</Typography>
                  </MenuItem>
                )} */}
                {user && user.name === "teacher" && (
                  <MenuItem onClick={handleTeacherProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                )}

                {/*Dashboard, Profile, Remarks For Students  */}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={handleDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={StudentsRemarks}>
                    <Typography textAlign="center">Remarks</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={StudentsLeaderBoard}>
                    <Typography textAlign="center">LeaderBoard</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={handleStudentProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                )}
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export const AppHomeNavbar = ({ nav }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDashboard = () => {
    setAnchorElUser(null);
    navigate("/studentDashboard");
  };

  const handleTeacherDashboard = () => {
    setAnchorElUser(null);
    navigate("/teacherDashboard");
  };

  const handleTeacherProfile = () => {
    setAnchorElUser(null);
    navigate("/teacherProfile");
  };

  const handleStudentProfile = () => {
    setAnchorElUser(null);
    navigate("/studentProfile");
  };

  const StudentsRemarks = () => {
    handleCloseUserMenu();
    navigate("/studentRemarks");
  };

  const StudentsLeaderBoard = () => {
    handleCloseUserMenu();
    navigate("/leaderBoard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout Successfully");
    window.location.assign("/");
    handleCloseUserMenu();
  };
  return (
    <>
      {/* <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}> */}
      <AppBar
        position="fixed"
        style={{
          background: colorChange
            ? "rgb(35,83,144)"
            : nav
            ? "transparent"
            : "lightGreen",
          boxShadow: "none",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {colorChange ? (
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <img
                  src="/src/assets/fluentu3.png"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{ width: "164px", height: "70px", borderRadius: 20 }}
                />
                {/* <Typography
                variant="h4"
                component="h3"
                sx={{ flexGrow: 1, color: "white", mx: 20, fontWeight: "bold" }}
              >
                FluentU
              </Typography> */}
              </Link>
            ) : (
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <img
                  src="/src/assets/fluentu1.png"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{ width: "164px", height: "45px", borderRadius: 20 }}
                />
              </Link>
            )}
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
              style={{ marginRight: "20px" }}
            >
              {user === null &&
                (colorChange ? (
                  <Button
                    variant="contained"
                    style={{
                      width: "10rem",
                      borderRadius: "15px",
                      height: "3rem",
                      backgroundColor: "#58cd32",
                      "&:hover": {
                        backgroundColor: "#5ad931",
                      },
                      marginRight: "20px",
                    }}
                    onClick={() => navigate("/studentregister")}
                  >
                    <Typography
                      variant="body1"
                      color="white"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Get Started
                    </Typography>
                  </Button>
                ) : (
                  user === null && (
                    <Button
                      variant="text"
                      style={{ marginRight: "20px", color: "white" }}
                      onClick={() => {
                        navigate("/studentlogin");
                      }}
                    >
                      For Teacher
                    </Button>
                  )
                ))}
              {user === null && colorChange ? (
                <Button
                  variant="contained"
                  style={{
                    // width: "10rem",
                    borderRadius: "15px",
                    height: "3rem",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#5ad931",
                    },
                    marginRight: "20px",
                  }}
                  onClick={() => navigate("/studentlogin")}
                >
                  <Typography
                    variant="body1"
                    color="white"
                    component="div"
                    style={{ fontWeight: "bold", color: "rgb(35,83,144)" }}
                  >
                    Login
                  </Typography>
                </Button>
              ) : (
                user === null && (
                  <Button
                    variant="text"
                    style={{ marginRight: "20px", color: "white" }}
                    onClick={() => {
                      navigate("/studentregister");
                    }}
                  >
                    For Students
                  </Button>
                )
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* <Button
                variant="contained"
                color="success"
                style={{ marginRight: "20px" }}
              >
                Login
              </Button> */}
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "white" }}
                >
                  {nav ? (
                    user && (
                      <Avatar alt="No Image">
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {user && user.name
                            ? user.name.charAt(0).toUpperCase()
                            : ""}
                        </Typography>
                      </Avatar>
                    )
                  ) : user ? (
                    <span>Welcome {user.name.toUpperCase()}</span>
                  ) : (
                    ""
                  )}
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
                {/*Dashboard, Profile For Teachers  */}
                {user && user.name === "teacher" && (
                  <MenuItem onClick={handleTeacherDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                )}
                {/* {user && user.name === "teacher" && (
                  <MenuItem onClick={StudentsRemarks}>
                    <Typography textAlign="center">Remarks</Typography>
                  </MenuItem>
                )} */}
                {user && user.name === "teacher" && (
                  <MenuItem onClick={handleTeacherProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                )}

                {/*Dashboard, Profile, Remarks For Students  */}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={handleDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={StudentsRemarks}>
                    <Typography textAlign="center">Remarks</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={StudentsLeaderBoard}>
                    <Typography textAlign="center">LeaderBoard</Typography>
                  </MenuItem>
                )}
                {user && user.name !== "teacher" && (
                  <MenuItem onClick={handleStudentProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                )}
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
