import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { getStudentsById } from "../../api/studentsApi";
import { user } from "../../common/Common";
import { AppStudentsNavbar } from "../../components/AppNavbar";

const Board = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState();
  const getStudent = async () => {
    try {
      const res = await getStudentsById(user.id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    getStudent();
  }, []);

  const handleNormal = () => {
    setDisplay(false);
  };

  const handleAssignment = () => {
    setDisplay(true);
  };

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

        <Container maxWidth="sm" style={{ paddingTop: "145px" }}>
          <Paper sx={{ bgcolor: "#d7ebae" }}>
            <Typography
              style={{
                paddingTop: "1rem",
                fontSize: "40px",
                fontWeight: "bold",
                color: "blueviolet",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <img
                src="src\assets\download.webp"
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"logo"}
                loading="lazy"
                style={{ width: "350px", height: "120px", borderRadius: 20 }}
              /> */}
              BOARD
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                paddingTop: "1rem",
                display: "flex",
                // justifyContent: "center",
                px: "3rem",
                color: "rgb(45 43 235 / 87%)",
              }}
            >
              Name :
              <span
                style={{ marginLeft: "0.5rem", color: "rgb(40 177 152 / 87%)" }}
              >
                {data ? data.firstName : ""}
              </span>
            </Typography>

            <Box sx={{ p: 2 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6} style={{ paddingLeft: "4rem" }}>
                  <Button
                    variant="text"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={handleNormal}
                  >
                    Normal
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: "4rem" }}>
                  <Button
                    variant="text"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={handleAssignment}
                  >
                    Assignments
                  </Button>
                </Grid>
              </Grid>
            </Box>
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

        {!display && (
          <Container style={{ paddingTop: "20px" }}>
            <Paper sx={{ bgcolor: "#d7e5ef" }}>
              <Typography
                style={{
                  paddingTop: "1rem",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "blueviolet",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Normal
              </Typography>

              <Box sx={{ p: 2 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Card sx={{ mb: "2rem", w: "50%" }}>
                      <Box sx={{ width: "100%", typography: "body1", p: 2 }}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          {data &&
                          data.normalQuestions &&
                          data.normalQuestions.length > 0 ? (
                            data.normalQuestions.map((data, index) => {
                              return (
                                <Grid item xs={2} key={index}>
                                  <Typography>
                                    {moment(data.date)
                                      .utc()
                                      .format("YYYY-MM-DD")}
                                    :
                                    {data.status === "Completed" ? (
                                      <Checkbox
                                        checked={true}
                                        size="small"
                                        style={{ paddingBottom: "13px" }}
                                      />
                                    ) : (
                                      <Checkbox
                                        checked={false}
                                        size="small"
                                        style={{ paddingBottom: "13px" }}
                                      />
                                    )}
                                  </Typography>
                                </Grid>
                              );
                            })
                          ) : (
                            <Box
                              sx={{ width: "100%", typography: "body1", p: 2 }}
                            >
                              <Typography
                                sx={{ fontWeight: "bold" }}
                                style={{
                                  fontSize: "2rem",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                No Data to Display
                              </Typography>
                            </Box>
                          )}
                        </Grid>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
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
        )}

        {display && (
          <Container style={{ paddingTop: "20px" }}>
            <Paper sx={{ bgcolor: "#d7e5ef" }}>
              <Typography
                style={{
                  paddingTop: "1rem",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "blueviolet",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Assignments
              </Typography>

              <Box sx={{ p: 2 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Card sx={{ mb: "2rem", w: "50%" }}>
                      <Box sx={{ width: "100%", typography: "body1", p: 2 }}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          {data &&
                          data.assignmentsQuestions &&
                          data.assignmentsQuestions.length > 0 ? (
                            data.assignmentsQuestions.map((data, index) => {
                              return (
                                <Grid item xs={2} key={index}>
                                  <Typography>
                                    {moment(data.date)
                                      .utc()
                                      .format("YYYY-MM-DD")}
                                    :
                                    {data.status === "Completed" ? (
                                      <Checkbox
                                        checked={true}
                                        size="small"
                                        style={{ paddingBottom: "13px" }}
                                      />
                                    ) : (
                                      <Checkbox
                                        checked={false}
                                        size="small"
                                        style={{ paddingBottom: "13px" }}
                                      />
                                    )}
                                  </Typography>
                                </Grid>
                              );
                            })
                          ) : (
                            <Box
                              sx={{ width: "100%", typography: "body1", p: 2 }}
                            >
                              <Typography
                                sx={{ fontWeight: "bold" }}
                                style={{
                                  fontSize: "2rem",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                No Data to Display
                              </Typography>
                            </Box>
                          )}
                        </Grid>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
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
        )}
      </div>
    </>
  );
};

export default Board;
