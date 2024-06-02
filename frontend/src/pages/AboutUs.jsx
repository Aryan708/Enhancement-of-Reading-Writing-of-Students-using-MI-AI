import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppStudentsNavbar } from "../components/AppNavbar";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/back_pic/02/66/55/50578b1ecd8c4ae.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
        }}
      >
       <AppStudentsNavbar nav={"home"} />

        <Container style={{ paddingTop: 100, paddingBottom: 20, width: "75%" }}>
          <Paper>
            {/* <div
              style={{
                minHeight: "75vh",
                //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                backgroundImage: `url('https://www.languagelabsystem.com/images/english-speaking-benefits.jpg')`,

                //   backgroundPosition: "center",
                backgroundRepeat: "revert",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
              }}
            > */}
            <Box sx={{ paddingTop: 5 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    color: "blueviolet",
                    textDecoration: "underline",
                  }}
                >
                  ABOUT US
                </Typography>
              </Box>
              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        ml: 4,
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Fluent U is a Students Friendly Platform where students
                      can learn English Language with the help of our Daily
                      Tasks and Assignments. We also provide with the Stories and
                      Essays to Read and Listen.
                    </Typography>
                    <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3rem",
                  paddingBottom: "3rem",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/studentLogin")}
                  style={{ width: 200, borderRadius: 20 }}
                >
                  Login
                </Button>
              </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mt: 2 }}>
                      <img
                        src="https://www.languagelabsystem.com/images/english-speaking-benefits.jpg"
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={"logo"}
                        loading="lazy"
                        style={{ width: "400px", height: "200px" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

      
            </Box>
            {/* </div> */}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
