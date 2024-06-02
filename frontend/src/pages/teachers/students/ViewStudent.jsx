import {
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentsById } from "../../../api/studentsApi";
import { AppStudentsNavbar } from "../../../components/AppNavbar";

const ViewStudent = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  const { id } = useParams();
  const getStudent = async () => {
    try {
      const res = await getStudentsById(id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [essayid, setEssayId] = useState();

  const handleClickOpen = (item) => {
    setOpen(true);
    // setScroll(scrollType);
    setEssayId(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const descriptionElementRef = React.useRef(null);
  //   React.useEffect(() => {
  //     if (open) {
  //       const { current: descriptionElement } = descriptionElementRef;
  //       if (descriptionElement !== null) {
  //         descriptionElement.focus();
  //       }
  //     }
  //   }, [open]);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/006/329/835/original/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-checklist-icon-3d-render-on-pink-background-vector.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
        }}
      >
        <AppStudentsNavbar />
        <Container sx={{ pt: 15, pb: 10 }}>
          <Box sx={{ marginBottom: "1rem" }}>
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
                  View{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "#13c3bb",
                      fontSize: "30px",
                    }}
                  >
                    {data && data.firstName} {data && data.lastName}
                  </span>{" "}
                  Profile
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Box>

          <Paper>
            <Box
              p={2}
              //   display="flex"
              //   justifyContent="flex-end"
              //   alignItems="flex-end"
              marginLeft="2rem"
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={3}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "blueviolet",
                    }}
                  >
                    Email :{"  "}
                    <span>{data && data.email}</span>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "blueviolet",
                    }}
                  >
                    Phone Number :{"  "}
                    <span>{data && data.phoneNumber}</span>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "blueviolet",
                    }}
                  >
                    School Name :{"  "}
                    <span>{data && data.schoolName}</span>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "blueviolet",
                    }}
                  >
                    Address :{"  "}
                    <span>{data && data.address}</span>
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ width: "250px" }}
                    onClick={() => setDisplay(false)}
                  >
                    Normal Questions
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ width: "250px" }}
                    onClick={() => setDisplay(true)}
                  >
                    Assignments Questions
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>

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
                                        data.assignments.length > 4 ? (
                                          <Checkbox
                                            checked={true}
                                            size="small"
                                            style={{ paddingBottom: "13px" }}
                                            onClick={() =>
                                              handleClickOpen(data.assignments)
                                            }
                                          />
                                        ) : (
                                          <Checkbox
                                            checked={true}
                                            size="small"
                                            style={{ paddingBottom: "13px" }}
                                          />
                                        )
                                      ) : (
                                        <Checkbox
                                          checked={false}
                                          size="small"
                                          style={{ paddingBottom: "13px" }}
                                        />
                                      )}
                                      <div>
                                        <Dialog
                                          open={open}
                                          onClose={handleClose}
                                          scroll={scroll}
                                          aria-labelledby="scroll-dialog-title"
                                          aria-describedby="scroll-dialog-description"
                                        >
                                          <DialogTitle id="scroll-dialog-title">
                                            Essay
                                          </DialogTitle>
                                          <DialogContent
                                            dividers={scroll === "paper"}
                                          >
                                            <DialogContentText
                                              id="scroll-dialog-description"
                                              //   ref={descriptionElementRef}
                                              tabIndex={-1}
                                            >
                                              {essayid}
                                            </DialogContentText>
                                          </DialogContent>
                                          <DialogActions>
                                            <Button onClick={handleClose}>
                                              Cancel
                                            </Button>
                                          </DialogActions>
                                        </Dialog>
                                      </div>
                                    </Typography>
                                  </Grid>
                                );
                              })
                            ) : (
                              <Box
                                sx={{
                                  width: "100%",
                                  typography: "body1",
                                  p: 2,
                                }}
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
              </Paper>
            </Container>
          )}

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
                                          // onClick={() =>
                                          //   handleClickOpen(data.assignments)
                                          // }
                                        />
                                      )}
                                      <div>
                                        <Dialog
                                          open={open}
                                          onClose={handleClose}
                                          scroll={scroll}
                                          aria-labelledby="scroll-dialog-title"
                                          aria-describedby="scroll-dialog-description"
                                        >
                                          <DialogTitle id="scroll-dialog-title">
                                            Essay
                                          </DialogTitle>
                                          <DialogContent
                                            dividers={scroll === "paper"}
                                          >
                                            <DialogContentText
                                              id="scroll-dialog-description"
                                              //   ref={descriptionElementRef}
                                              tabIndex={-1}
                                            >
                                              {essayid}
                                            </DialogContentText>
                                          </DialogContent>
                                          <DialogActions>
                                            <Button onClick={handleClose}>
                                              Cancel
                                            </Button>
                                          </DialogActions>
                                        </Dialog>
                                      </div>
                                    </Typography>
                                  </Grid>
                                );
                              })
                            ) : (
                              <Box
                                sx={{
                                  width: "100%",
                                  typography: "body1",
                                  p: 2,
                                }}
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
              </Paper>
            </Container>
          )}
        </Container>
      </div>
    </>
  );
};

export default ViewStudent;
