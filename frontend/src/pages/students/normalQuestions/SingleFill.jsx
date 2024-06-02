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
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import VolumeUpSharpIcon from "@mui/icons-material/VolumeUpSharp";

const SingleFill = ({
  question,
  answers,
  rightAns,
  colorSelect,
  handleSelect,
  currentPage
}) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
    // handleSelect(data, question)
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
                variant="h4"
                component="div"
                style={{ paddingLeft: "10px" }}
              >
                {data
                  ? question.question.replace(question.correct, data)
                  : question.question.replace(question.correct, "_____")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card sx={{ width: 150 }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={`http://${window.location.hostname}:4000/${question.image}`}
                  alt="story"
                  style={{ objectFit: "fill" }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: "2rem", mb: "1rem" }}>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={4}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // color: "rgb(45 43 235 / 87%)",
                }}
              >
                Enter Answer :
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                label="Enter Your Answer"
                id="CorrectAns"
                type="text"
                name="correct"
                value={data}
                onChange={handleChange}
                disabled={rightAns ? true : false}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                // fullWidth
                size="small"
                height="15px"
                sx={{ mb: 2, width: 100 }}
                onClick={() => handleSelect(data, question)}
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

export default SingleFill;
