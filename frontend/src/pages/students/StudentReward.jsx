import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {  AppStudentsNavbar } from "../../components/AppNavbar";

const StudentReward = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
          backgroundImage: `url('https://image.shutterstock.com/image-vector/daily-evening-routine-sticker-rewards-260nw-1749565622.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "initial",
          backgroundSize: "cover",
        }}
      >
        <AppStudentsNavbar />
        <Box sx={{ marginBottom: "2rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "blueviolet",
                  marginLeft: "2rem",
                }}
              >
                Rewards
              </Typography>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <Card sx={{ mb: "2rem", w: "50%" }}>
              <Box sx={{ width: "100%", typography: "body1", py: 2 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ mb: 2 }}
                >
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Name :{" "}
                      <span style={{ color: "blueviolet", marginLeft: "3px" }}>
                        Rajesh
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Email :{" "}
                      <span style={{ color: "blueviolet", marginLeft: "3px" }}>
                        rajesh@gmail.com
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ mb: "2rem", w: "50%" }}>
              <Box sx={{ width: "100%", typography: "body1" }}></Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default StudentReward;
