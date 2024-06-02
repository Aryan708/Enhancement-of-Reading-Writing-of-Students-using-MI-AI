import {
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
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addStory } from "../../../../api/storyApi";
import { AppStudentsNavbar } from "../../../../components/AppNavbar";

const AddStory = () => {
  const [data, setData] = useState({
    image: "",
    title: "",
    story: "",
    status: "Pending",
    type:"Normal"
  });

  const [file, setFile] = useState();
  const [viewFile, setViewFile] = useState();

  const navigate = useNavigate()
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
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", data.title);
    formData.append("story", data.story);
    formData.append("status", data.status);
    formData.append("type", data.type);

    await addStory(formData)

    toast.success("Story Added Successfully");
    navigate("/allNormalStories");
    
  };

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

        <Container
          maxWidth="md"
          style={{ paddingTop: "120px", paddingBottom: "30px", width: 700 }}
        >
          {/* <Box sx={{ marginBottom: "2rem" }}>
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
              </Grid>
            </Grid>
          </Box> */}
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
                  ADD Story
                </Typography>

                <form onSubmit={handleSubmit}>
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
                    ADD Title
                  </Typography>
                  <TextField
                    fullWidth
                    label="Enter The Title"
                    id="Title"
                    name="title"
                    value={data.title}
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
                    ADD Story
                  </Typography>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Enter the Story"
                    style={{ width: 800, fontSize: "20px", marginTop: 2 }}
                    type="text"
                    name="story"
                    value={data.story}
                    onChange={handleChange}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
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
      </div>
    </>
  );
};

export default AddStory;
