import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { getStory } from "../../../api/storyApi";
import AppChatBoy from "../../../components/AppChatBoy";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import SingleStory from "./SingleStory";

const StudentsAllStories = () => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const { speak } = useSpeechSynthesis();
  const text = "Please Select AnyOne Story ";
  const handleOnClick = () => {
    speak({ text: text, rate: 1, pitch: 1 });
  };

  const getAllStories = async () => {
    try {
      const res = await getStory();
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllStories();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/008/564/308/non_2x/nature-park-scene-background-with-palm-leaf-and-palm-tree-vector.jpg`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />

        <Container style={{ paddingTop: "100px" }}>
          <Box sx={{ marginBottom: "2rem" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "blueviolet",
                    marginLeft: "2rem",
                  }}
                >
                  ALL Stories
                </Typography>
              </Grid>
              {/* <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  navigate("/addStudents");
                }}
              >
                ADD
              </Button>
            </Grid> */}
            </Grid>
          </Box>

          <Grid item xs={12}>
            <Grid
              container
              justifyContent="around"
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
                data.map((story, index) => {
                  return (
                    <Grid key={story._id} item>
                      <SingleStory story={story} key={story.id} />
                    </Grid>
                  );
                })
              ) : (
                <span>Hello</span>
              )}
            </Grid>
          </Grid>
        </Container>
        <Paper
          sx={{
            position: "fixed",
            bottom: -4,
            right: 0,
            background: "transparent",
            boxShadow: "none",
            mx: 5,
          }}
        >
          <AppChatBoy handleOnClick={handleOnClick} />
        </Paper>
      </div>
    </>
  );
};

export default StudentsAllStories;
