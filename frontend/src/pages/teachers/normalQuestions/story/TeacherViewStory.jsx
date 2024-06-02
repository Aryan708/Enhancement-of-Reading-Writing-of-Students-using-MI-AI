import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import useSpeechRecognition from "react-speech-kit/dist/useSpeechRecognition";
import { getStoryById } from "../../../../api/storyApi";
import { AppStudentsNavbar } from "../../../../components/AppNavbar";

const TeacherViewStory = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoding, setIsLoading] = useState(true);

  //   To Listen from text to Speech
  //   const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  //   const { listen, listening, stop } = useSpeechRecognition({
  //     onResult: (result) => {
  //       setValue(result);
  //     },
  //   });
  const getStory = async () => {
    try {
      const res = await getStoryById(id);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  const text = `Hello Today we will Listen to a story name ${data.title}. ${data.story}`;
  const handleClickToListen = () => {
    speak({ text: text, rate: 1, pitch: 1 });
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('http://${window.location.hostname}:4000/${data.image}')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />

        <Container style={{ paddingTop: "120px" }}>
          {/* <div>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={listen} >
          🎤
        </button>
        <button onClick={stop}>
          stop
        </button>
        {listening && <div>Go ahead I'm listening</div>}
      </div> */}
          <Box sx={{ marginBottom: "2rem" }}>
            <Paper>
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
                      paddingBottom: "2rem",
                    }}
                  >
                    <Typography variant="h4" component="div">
                      Loading...
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <div>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "25px",
                          fontWeight: "bold",
                          color: "blueviolet",
                          marginLeft: "2rem",
                          paddingTop: "1rem",
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        sx={{ mt: "1rem" }}
                        onClick={() => {
                          handleClickToListen();
                        }}
                      >
                        Listen Story
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <Typography
                        style={{
                          fontSize: "20px",
                          marginLeft: "2rem",
                          paddingBottom: "2rem",
                          paddingTop: "1rem",
                        }}
                      >
                        {data.story}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate("/allNormalStories")}
                >
                  Back
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default TeacherViewStory;
