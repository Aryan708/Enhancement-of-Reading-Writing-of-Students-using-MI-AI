import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import { getStudentsById } from "../../../api/studentsApi";
import { getAssignmentQuestions } from "../../../api/AssignmentQuestionsApi";
import { user } from "../../../common/Common";
import moment from "moment/moment";

const EssayRewards = () => {
  const [student, setStudent] = useState([]);
  const [assignmentsQuestions, setAssignmentsQuestions] = useState([]);

  const getstudent = async () => {
    try {
      const res = await getStudentsById(user.id);
      setStudent(res.data);
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

            {/* <Box sx={{ p: 2 }}>
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
                    {student.assignmentsQTotal &&
                      student.assignmentsQTotal.length}
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
                    {assignmentsQuestions && assignmentsQuestions.length}
                  </Typography>
                </Grid>
              </Grid>
            </Box> */}
            <Box sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
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
        </Container>
      </div>
    </>
  );
};

export default EssayRewards;
