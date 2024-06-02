import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
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
import { addAssignmentQuestions } from "../../../../api/AssignmentQuestionsApi";

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

  const [file, setFile] = useState();
  const [viewFile, setViewFile] = useState();

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setViewFile(URL.createObjectURL(e.target.files[0]));
    setFile((e.target.name = e.target.files[0]));
  };

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

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("question", data.question);
    formdata.append("correct", data.correct);
    formdata.append("answers1", data.answers1);
    formdata.append("answers2", data.answers2);
    formdata.append("answers3", data.answers3);
    formdata.append("answers4", data.answers4);
    data.answers = item;
    for (let i of data.answers) {
      formdata.append("answers", i);
    }

    formdata.append("questionType", data.questionType);

    await addAssignmentQuestions(formdata);
    navigate("/allAssigments");
    toast.success("Question Added Successfully");
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
                <Divider sx={{ mt: 4 }} />
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      mt: "4.5rem",
                    }}
                  >
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 200,
                        mx: "auto",
                      }}
                    >
                      Upload
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                      />
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card sx={{ width: 210, my: 2 }}>
                      {viewFile ? (
                        <CardMedia
                          component="img"
                          height="150"
                          image={viewFile}
                          alt="story"
                          style={{ objectFit: "fill" }}
                        />
                      ) : (
                        <CardMedia
                          component="img"
                          height="150"
                          image="src\assets\dummystory.jpg"
                          alt="story"
                          style={{ objectFit: "fill" }}
                        />
                      )}
                    </Card>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 0.5 }} />
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
