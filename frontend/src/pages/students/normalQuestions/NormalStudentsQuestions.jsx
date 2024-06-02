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
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SingleNormalQuestion from "./SingleNormalQuestion";
import { useNavigate } from "react-router-dom";
import SingleEssay from "./SingleEssay";
import SingleAudio from "./SingleAudio";
import SingleFill from "./SingleFill";
import { getNormalQuestions } from "../../../api/NormalQuestionsApi";
import {
  AddNormalQuestionsDaily,
  getStudentsById,
  updateStudentsById,
} from "../../../api/studentsApi";
import { user } from "../../../common/Common";
import moment from "moment/moment";
import { useSpeechSynthesis } from "react-speech-kit";
import SingleSpeakText from "./SingleSpeakText";

const NormalStudentsQuestions = () => {
  const [data, setData] = useState([]);
  const [student, setStudent] = useState([]);

  const [isLoding, setIsLoading] = useState(true);
  const [colorSelect, setColorSelect] = useState("");
  const [correctAns, setCorrectAns] = useState();
  const [rightAns, setRightAns] = useState();
  const [display, setDisplay] = useState(false);

  const [answers, setAnswers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const navigate = useNavigate();
  const getAllQuestion = async () => {
    try {
      const res = await getNormalQuestions();
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
  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //   };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      setColorSelect();
      setRightAns();
      setDisplay(false);
    }
  };

  const handleSelect = (item, question) => {
    setColorSelect(item);
    setCorrectAns(question);
  };

  const handleCheck = () => {
    if (
      colorSelect.toLocaleLowerCase() === correctAns.correct.toLocaleLowerCase()
    ) {
      let item = [];
      item.push(...answers, correctAns._id);
      setAnswers(item);
      setRightAns("correct");
      setDisplay(true);
    } else {
      setRightAns("incorrect");
      setDisplay(true);
    }
  };

  const handleRemarks = async () => {
    const data = await updateStudentsById(user.id, {
      ...student,
      normalQTotal: answers,
    });
    // localStorage.setItem("total", data.data);

    const d = new Date();
    const normal = { date: d, normal: answers.length, status: "Completed" };
    await AddNormalQuestionsDaily(user.id, normal);

    navigate("/remarks");
  };

  const { speak } = useSpeechSynthesis();

  const handleOnClick = (text) => {
    speak({ text: text, rate: 1, pitch: 1 });
  };
  return (
    <>
      <AppStudentsNavbar />
      <Container style={{ paddingTop: "100px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              // valueBuffer= {nPages}
              value={currentPage * (100 / nPages)}
              color={"success"}
              sx={{ height: "20px", borderRadius: 50 }}
            />
          </Box>
          <Box sx={{ minWidth: 40 }}>
            {/* <Typography variant="body2" color="text.secondary">{`${Math.round(
              currentPage * (100/nPages)
            )}%`}</Typography> */}
            {/* <Typography variant="body2" color="text.secondary" sx={{mt:1}}>
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </Typography> */}
          </Box>
        </Box>

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
            ) : currentRecords.length > 0 ? (
              currentRecords.map((question, index) => {
                return (
                  <Grid key={question._id} item>
                    {question.questionType === "MCQ" && (
                      <SingleNormalQuestion
                        question={question}
                        answers={answers}
                        rightAns={rightAns}
                        colorSelect={colorSelect}
                        handleSelect={handleSelect}
                        currentPage={currentPage}
                      />
                    )}
                    {/* {question.questionType === "Essays" && (
                      <SingleEssay
                        question={question}
                        answers={answers}
                        rightAns={rightAns}
                        colorSelect={colorSelect}
                        handleSelect={handleSelect}
                      />
                    )} */}
                    {question.questionType === "Audio" && (
                      <SingleAudio
                        question={question}
                        answers={answers}
                        rightAns={rightAns}
                        colorSelect={colorSelect}
                        handleSelect={handleSelect}
                        currentPage={currentPage}
                      />
                    )}
                    {question.questionType === "Fill" && (
                      <SingleFill
                        question={question}
                        answers={answers}
                        rightAns={rightAns}
                        colorSelect={colorSelect}
                        handleSelect={handleSelect}
                        currentPage={currentPage}
                      />
                    )}
                     {question.questionType === "Speak" && (
                      <SingleSpeakText
                        question={question}
                        answers={answers}
                        rightAns={rightAns}
                        colorSelect={colorSelect}
                        handleSelect={handleSelect}
                        currentPage={currentPage}
                      />
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
                Questions will be uploaded soon
              </span>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2} m={2} textAlign="center">
          <Grid item xs={6}>
            {rightAns &&
              (rightAns === "correct" ? (
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "green" }}
                >
                  Good Job ! <span>It's A Right Answer</span>
                </Typography>
              ) : (
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "red" }}
                  >
                    Sorry! It's a Wrong Answer
                  </Typography>
                  The Correct Answer is : {"  "}
                  <span
                    style={{
                      color: "green",
                      fontSize: "25px",
                      marginRight: "10px",
                    }}
                  >
                    {correctAns.correct}
                  </span>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      handleOnClick(correctAns.correct);
                    }}
                  >
                    Listen
                  </Button>
                </div>
              ))}
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            {display && (
              <div>
                {data && data.length > currentPage ? (
                  <Button
                    variant="contained"
                    onClick={nextPage}
                    sx={{
                      bgcolor:
                        rightAns &&
                        (rightAns === "correct" ? "#24ab0c" : "#ed0606c2"),
                      width: 150,

                      ":hover": {
                        bgcolor:
                          rightAns &&
                          (rightAns === "correct" ? "#7dc909" : "#d13030d9"),
                        color: "white",
                      },
                    }}
                  >
                    Next
                  </Button>
                ) : (
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
                )}
              </div>
            )}

            {!display && (
              <Button
                variant={colorSelect ? "contained" : "disabled"}
                sx={{
                  bgcolor: colorSelect ? "#1976d2" : "#b2b3b5e8",
                  width: 150,
                  // ":hover": {
                  //   bgcolor: "greenyellow",
                  //   color: "white"
                  // }
                }}
                onClick={handleCheck}
              >
                Check
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NormalStudentsQuestions;
