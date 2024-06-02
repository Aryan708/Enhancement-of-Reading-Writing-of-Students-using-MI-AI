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
import { addNormalQuestions } from "../../../api/NormalQuestionsApi";

const Fill = ({ questionType }) => {
  const [data, setData] = useState({
    question: "",
    correct: "",
    image: "",
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
    try {
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("question", data.question);
      formdata.append("correct", data.correct);
      formdata.append("questionType", data.questionType);

      await addNormalQuestions(formdata);
      toast.success("Question Added Successfully");
      navigate("/allNormalQuestions");
    } catch (error) {
      toast.error(error);
    }
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
            <Paper sx={{ p: 2, width: 500 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(45 43 235 / 87%)",
                }}
              >
                Fill In The Blanks
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  // color: "rgb(45 43 235 / 87%)",
                  mt: 1,
                  ml: 1,
                }}
              >
                Questions
              </Typography>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  hidden
                  name="questionType"
                  value={questionType}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  label="Enter The Questions"
                  id="question"
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
                    my: 2,
                    ml: 1,
                  }}
                >
                  Correct Answer
                </Typography>
                <TextField
                  fullWidth
                  label="Enter Correct Answer"
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

export default Fill;
