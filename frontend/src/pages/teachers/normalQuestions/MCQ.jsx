import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addNormalQuestions } from "../../../api/NormalQuestionsApi";

const MCQ = ({ questionType }) => {
  const [data, setData] = useState({
    question: "",
    answers1: "",
    answers2: "",
    answers3: "",
    answers4: "",
    answers: [],
    correct: "",
    status: "Pending",
    questionType: questionType,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = [];

    item.push(data.answers1, data.answers2, data.answers3, data.answers4);
    data.answers = item;
    await addNormalQuestions(data)
    toast.success("Question Added Successfully");
    navigate("/allNormalQuestions");
  };

  return (
    <>
      <Container
        style={{ paddingTop: "40px", paddingBottom: "30px", width: 700 }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            // columns={{ xs: 6, sm: 2, md: 6 }}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(45 43 235 / 87%)",
                }}
              >
                Multiple Choice Questions
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  // color: "rgb(45 43 235 / 87%)",
                  mt: 2,
                  ml: 1,
                }}
              >
                ADD Questions
              </Typography>
              <form onSubmit={handleSubmit}>
                <input
                  hidden
                  type="text"
                  name="questionType"
                  value={questionType}
                  onChange={handleChange}
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={2}
                  placeholder="Enter Your Questions"
                  style={{ width: 600, fontSize: "20px", marginTop: 2 }}
                  type="text"
                  name="question"
                  value={data.question}
                  onChange={handleChange}
                />

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    // color: "rgb(45 43 235 / 87%)",
                    mt: 2,
                    ml: 1,
                  }}
                >
                  ADD Options
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Answers-I"
                      id="Answers-I"
                      name="answers1"
                      value={data.answers1}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Answers-II"
                      id="Answers-II"
                      name="answers2"
                      value={data.answers2}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Answers-III"
                      id="Answers-III"
                      name="answers3"
                      value={data.answers3}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Answers-IV"
                      id="Answers-IV"
                      name="answers4"
                      value={data.answers4}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    // color: "rgb(45 43 235 / 87%)",
                    mt: 2,
                    ml: 1,
                  }}
                >
                  ADD Correct Answer
                </Typography>
                <TextField
                  fullWidth
                  label="ADD Correct Answer"
                  id="CorrectAns"
                  type="text"
                  name="correct"
                  value={data.correct}
                  onChange={handleChange}
                />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "200px" }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MCQ;
