import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import {
  getLeaderBoard,
  getStudents,
  getStudentsById,
} from "../../api/studentsApi";
import { user } from "../../common/Common";
import { AppStudentsNavbar } from "../../components/AppNavbar";

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  const getStudent = async () => {
    try {
      const res = await getLeaderBoard();
      for (let i of res.data) {
        const student = await getStudentsById(i.studentId);
        i.studentId = student.data;
      }

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    getStudent();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://png.pngtree.com/background/20220714/original/pngtree-brazilian-carnival-mask-masquerade-background-picture-image_1605847.jpg`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />

        <Container style={{ paddingTop: "145px", width: "650px" }}>
          <Paper sx={{ bgcolor: "#d7ebae" }}>
            <Typography
              style={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
                fontSize: "40px",
                fontWeight: "bold",
                color: "blueviolet",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="src\assets\leaderboard.jfif"
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"logo"}
                loading="lazy"
                style={{ width: "250px", height: "120px", borderRadius: 20 }}
              />
            </Typography>
            <Divider />
            <Box sx={{ p: 1 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "rgb(45 43 235 / 87%)",
                    }}
                  >
                    Rank
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: "4rem" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "rgb(45 43 235 / 87%)",
                    }}
                  >
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ paddingLeft: "4rem" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "rgb(45 43 235 / 87%)",
                    }}
                  >
                    Score
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 1 }}>
              {data &&
                data.map((data, index) => {
                  return (
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      key={index}
                    >
                      <Grid item xs={2}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: "rgb(45 43 235 / 87%)",
                          }}
                        >
                          {index + 1}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} style={{ paddingLeft: "4rem" }}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: "rgb(45 43 235 / 87%)",
                          }}
                        >
                          {data.studentId.firstName} {data.studentId.lastName}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} style={{ paddingLeft: "4rem" }}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: "rgb(45 43 235 / 87%)",
                          }}
                        >
                          {data.score}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
            </Box>
            <Divider />

            {/* <Box sx={{ paddingBottom: "1rem" }}>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "violet",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Congratulations!!! You got Rewards{" "}
                  <EmojiEventsSharpIcon sx={{ mr: 1, fontSize: "40px" }} />
                </Typography>
              </Box> */}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default LeaderBoard;
