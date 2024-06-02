import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, NavLink } from "react-router-dom";

const AppFooter = () => {
  return (
    <AppBar
      // position="fixed"
      position="static"
      //   style={{ backgroundColor: "black", opacity: "40%", marginTop: "90vh" }}
      style={{ backgroundColor: "rgb(35,83,144)", }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color="white" component="div">
              Designed And Developed By team{" "}
              <NavLink
                to={"/about"}
                style={{  color: "rgb(200 126 231)", fontWeight: "bold" }}
              >
                Fluent U
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppFooter;
