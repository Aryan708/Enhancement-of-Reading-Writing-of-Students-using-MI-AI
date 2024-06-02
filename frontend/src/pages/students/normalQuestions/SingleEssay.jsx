import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  List,
  Pagination,
  PaginationItem,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SingleNormalQuestion from "./SingleNormalQuestion";
import { useNavigate } from "react-router-dom";
import { getNormalQuestions } from "../../../api/NormalQuestionsApi";
import {
  AddAssignmentsQuestionsDaily,
  AddNormalQuestionsDaily,
  getStudentsById,
  updateStudentsById,
} from "../../../api/studentsApi";
import { user } from "../../../common/Common";
import moment from "moment/moment";
import { getAssignmentQuestions } from "../../../api/AssignmentQuestionsApi";

const SingleEssay = () => {
  const [data, setData] = useState([]);
  const [student, setStudent] = useState([]);

  const [essay, setEssay] = useState("");
  const [isLoding, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const getAllQuestion = async () => {
    try {
      const res = await getAssignmentQuestions();
      let item = [];
      for (let i of res.data) {
        if (i.questionType === "Essays") {
          const d = new Date();
          if (
            moment(i.createdAt).utc().format("YYYY-MM-DD") ===
            moment(d).utc().format("YYYY-MM-DD")
          ) {
            item.push(i);
          }
        }
      }
      setData(item);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getstudent = async () => {
    try {
      const res = await getStudentsById(user.id);
      setStudent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllQuestion();
    getstudent();
  }, []);

  const handleRemarks = async () => {
    const data = await updateStudentsById(user.id, {
      ...student,
      essay: essay,
      // status:"Completed"
    });
    const d = new Date();
    const assignments = {
      date: d,
      assignments: essay,
      status: "Completed",
    };
    await AddAssignmentsQuestionsDaily(user.id, assignments);
    navigate("/essayRewards");
  };

  return (
    <>
      <AppStudentsNavbar />
      <Container style={{ paddingTop: "100px" }}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            // columns={{ xs: 6, sm: 2, md: 6 }}
          >
            {isLoding ? (
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "3rem",
                  }}
                >
                  <Typography variant="h4" component="div">
                    Loading...
                  </Typography>
                </Grid>
              </Grid>
            ) : data.length > 0 ? (
              data.map((question, index) => {
                return (
                  <Grid key={question._id} item>
                    {question.questionType === "Essays" && (
                      <Box
                        sx={{
                          mb: 3,
                          bgcolor: "lightblue",
                          borderRadius: 5,
                          padding: 2,
                          marginTop: "2rem",
                        }}
                      >
                        <Box>
                          <Grid container spacing={2}>
                            <Grid item xs={8}>
                              <Typography
                                style={{
                                  fontSize: "25px",
                                  fontWeight: "bold",
                                  color: "blueviolet",
                                  marginBottom: "0.4rem",
                                }}
                              >
                                Questions - {index + 1}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                                style={{ paddingLeft: "20px" }}
                              >
                                Essay Topic :{" "}
                                <span style={{ color: "rgb(17 14 229)" }}>
                                  {question.question}
                                </span>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box sx={{ mb: "1rem" }}>
                          <Typography
                            variant="h5"
                            component="div"
                            sx={{
                              color: "rgb(45 43 235 / 87%)",
                            }}
                          >
                            Write Essay :
                          </Typography>

                          <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Write Essay"
                            style={{
                              width: 800,
                              fontSize: "20px",
                              marginTop: 2,
                            }}
                            type="text"
                            name="essay"
                            value={essay}
                            onChange={(e) => {
                              setEssay(e.target.value);
                            }}
                          />
                        </Box>
                        <Container
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        ></Container>
                      </Box>
                    )}
                  </Grid>
                );
              })
            ) : (
              <span
                style={{
                  fontSize: "25px",
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "5rem",
                }}
              >
                Essay will be uploaded soon
              </span>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2} m={2} textAlign="center">
          <Grid item xs={6}></Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <div>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#24ab0c",
                  width: 150,

                  ":hover": {
                    bgcolor: "#7dc909",
                    color: "white",
                  },
                }}
                onClick={handleRemarks}
              >
                Remarks
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleEssay;
