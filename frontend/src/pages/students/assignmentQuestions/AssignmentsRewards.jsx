import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import { getStudentsById } from "../../../api/studentsApi";
import { getAssignmentQuestions } from "../../../api/AssignmentQuestionsApi";
import { user } from "../../../common/Common";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const AssignmentsRewards = () => {
  const [student, setStudent] = useState([]);
  const [assignmentsQuestions, setAssignmentsQuestions] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getstudent = async () => {
    try {
      const res = await getStudentsById(user.id);
      let item = [];
      for (let i of res.data.assignmentsQTotal) {
        if (i.status === "correct") {
          item.push(i);
        }
      }
      setStudent(item);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAnswers = async () => {
    try {
      const res = await getStudentsById(user.id);
      setAllAnswers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAssignmentsQuestions = async () => {
    try {
      const res = await getAssignmentQuestions();
      let item = [];
      for (let i of res.data) {
        if (i.questionType !== "Essays") {
          const d = new Date();
          if (
            moment(i.createdAt).utc().format("YYYY-MM-DD") ===
            moment(d).utc().format("YYYY-MM-DD")
          ) {
            item.push(i);
          }
        }
      }
      setAssignmentsQuestions(item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getstudent();
    getAllAssignmentsQuestions();
    getAllAnswers();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://www.hrcloud.com/hubfs/Blogpost-workmates%20campaign%234-Building%20Effective%20Rewards%20and%20Recognition.png.png')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />

        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
            }}
          >
            Question And Answers
          </DialogTitle>
          <DialogContent>
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {allAnswers.assignmentsQTotal &&
                  allAnswers.assignmentsQTotal.map((data, index) => {
                    return (
                      <Grid item xs={3} key={index} sx={{ mt: 2 }}>
                        <Card
                          style={{
                            backgroundColor:
                              data.status === "correct"
                                ? "greenyellow"
                                : "#ed685a",
                            // minheight: "200px",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {data.id.question}
                            </Typography>
                            {data.status === "incorrect" && (
                              <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                              >
                                Your Answer : {data.studentAnswer}
                              </Typography>
                            )}
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Answers : {data.id.correct}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>

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
              <img
                src="src\assets\download.webp"
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"logo"}
                loading="lazy"
                style={{ width: "350px", height: "120px", borderRadius: 20 }}
              />
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
                {user.name}
              </span>
            </Typography>

            <Box sx={{ p: 2 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Marks Obtained :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {student && student.length}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Total Marks :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "purple",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {allAnswers.assignmentsQTotal &&
                      allAnswers.assignmentsQTotal.length}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ paddingBottom: "1rem" }}>
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
            </Box>
          </Paper>
          <Box
            sx={{ p: 2 }}
            style={{
              marginTop: "0.5rem",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green" }}
                  onClick={handleClickOpen}
                >
                  Question & Answers
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green" }}
                  onClick={() => {
                    navigate("/studentRemarks");
                  }}
                >
                  Daily Remarks
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default AssignmentsRewards;
