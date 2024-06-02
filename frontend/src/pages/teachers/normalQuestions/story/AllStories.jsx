import {
  Button,
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
import { useNavigate } from "react-router-dom";
import { getStory } from "../../../../api/storyApi";
import { AppStudentsNavbar } from "../../../../components/AppNavbar";
import SingleStory from "./SingleStory";
// import SingleStory from "./SingleStory";

const AllStories = () => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const getAllStories = async () => {
    try {
      const res = await getStory()
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
          backgroundImage: `url('https://www.slidebackground.com/uploads/kids-background/kids-programs-background-animation-youtube-0.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />

        <Container style={{ paddingTop: "110px" }}>
          <Box sx={{ marginBottom: "2rem" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "blueviolet",
                    marginLeft: "2rem",
                  }}
                >
                  ALL Stories
                </Typography>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={2} >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate("/addStory");
                  }}
                  sx={{ width: 200 }}
                >
                  ADD
                </Button>
              </Grid>
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
                    <Grid key={story.id} item>
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
      </div>
    </>
  );
};

export default AllStories;
