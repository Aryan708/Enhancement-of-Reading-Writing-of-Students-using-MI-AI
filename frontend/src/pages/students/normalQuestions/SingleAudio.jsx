import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import VolumeUpSharpIcon from "@mui/icons-material/VolumeUpSharp";

const SingleAudio = ({
  question,
  answers,
  rightAns,
  colorSelect,
  handleSelect,
  currentPage,
}) => {
  const { speak } = useSpeechSynthesis();
  const text = question.question;
  const handleOnClick = () => {
    speak({ text: text, rate: 1, pitch: 1 });
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
                {/* {question.question} */}
                <Grid container spacing={2} textAlign="center">
                  <Grid item xs={4}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ pt: 4 }}
                    >
                      Listen To This
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 100,
                        bgcolor: "#1976d2",
                        borderRadius: 10,
                      }}
                    >
                      <IconButton
                        aria-label="delete"
                        onClick={handleOnClick}
                        sx={{
                          bgcolor: "#1976d2",
                          color: "white",
                          ":hover": {
                            bgcolor: "#1976d1",
                            color: "white",
                          },
                        }}
                      >
                        <VolumeUpSharpIcon sx={{ fontSize: "75px" }} />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
             {question.image && question.image !=="undefined" ? <Card sx={{ width: 150, height: 120 }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={`http://${window.location.hostname}:4000/${question.image}`}
                  alt="story"
                  style={{ objectFit: "fill" }}
                />
              </Card> : ""}
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center" sx={{ mt: 2 }} spacing={2}>
          {question.answers.map((answers, index) => {
            return (
              <Grid key={answers} item>
                <Button
                  variant="text"
                  // fullWidth
                  size="small"
                  height="15px"
                  sx={{ mb: 2 }}
                  onClick={() => handleSelect(answers, question)}
                  // variant={rightAns ? "disabled" : "text"}
                  disabled={rightAns ? true : false}
                >
                  <Card
                    sx={{
                      width: 300,
                      px: 3,
                      pt: 1,
                      textAlign: "center",
                      bgcolor: answers === colorSelect ? "purple" : "white",
                      color: answers === colorSelect ? "white" : "black",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {answers}
                    </Typography>
                  </Card>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default SingleAudio;
