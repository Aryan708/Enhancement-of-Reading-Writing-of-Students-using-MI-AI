import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const SingleSpeakText = ({
  question,
  answers,
  rightAns,
  colorSelect,
  handleSelect,
  currentPage,
}) => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Box
        sx={{
          width: 750,
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
                Questions - {currentPage}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ paddingLeft: "10px" }}
              >
                Speak This :
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ paddingLeft: "10px" }}
              >
                {question.question}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: "2rem", mb: "1rem" }}>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={8}>
              <TextField
                fullWidth
                size="small"
                label="Enter Your Answer"
                id="CorrectAns"
                type="text"
                name="correct"
                value={value}
                onChange={handleChange}
                disabled={true  }
                sx={{ bgcolor: "white" }}
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
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                // fullWidth
                size="small"
                height="15px"
                sx={{ mb: 2, width: 100 }}
                onClick={() => {
                  handleSelect(value, question);
                  stop();
                }}
                disabled={rightAns ? true : false}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Container>
      </Box>
    </>
  );
};

export default SingleSpeakText;
