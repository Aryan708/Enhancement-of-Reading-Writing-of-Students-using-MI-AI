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
import { useSpeechRecognition } from "react-speech-kit";
import { addNormalQuestions } from "../../../api/NormalQuestionsApi";

const SpeakText = ({ questionType }) => {
  const [data, setData] = useState({
    question: "",
    correct: "",
    status: "Pending",
    questionType: questionType,
  });

  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // data.question = value
    await addNormalQuestions(data);
    toast.success("Question Added Successfully");
    stop();
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
                Speak the Text Type Questions
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
                <TextField
                  fullWidth
                  label="Enter the Text"
                  id="question"
                  type="text"
                  name="question"
                  value={(data.question = value)}
                  onChange={handleChange}
                  disabled
                />
                <Button
                  variant="contained"
                  onClick={listen}
                  style={{ marginTop: "1rem", marginRight: "1rem" }}
                >
                  speak
                </Button>
                <Button
                  variant="contained"
                  onClick={stop}
                  style={{ marginTop: "1rem" }}
                >
                  stop
                </Button>
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
                  value={(data.correct = value)}
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

export default SpeakText;
