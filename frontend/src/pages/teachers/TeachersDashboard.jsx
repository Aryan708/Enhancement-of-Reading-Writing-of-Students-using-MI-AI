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
import { Container, width } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppStudentsNavbar } from "../../components/AppNavbar";

const TeachersDashboard = () => {
  const [display, setDisplay] = useState("");

  const navigate = useNavigate();
  const handleNormalClick = () => {
    setDisplay("normal");
  };

  const handleAssignmentClick = () => {
    setDisplay("assignment");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-yellow-question-mark-on-a-light-blue-pastel-background-3d-illustration-image_443913.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
        }}
      >
        <AppStudentsNavbar />
        <Container style={{ paddingTop: "150px" }}>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => navigate("/allStudents")}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="src\assets\students.png"
                    alt="All students"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleNormalClick}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="src\assets\normalquestions.jpg"
                    alt="Questions and Answers"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleAssignmentClick}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="src\assets\assignments.jpg"
                    alt="Questions and Answers"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container style={{ paddingTop: "50px" }}>
          {display === "normal" && (
            <Grid container spacing={10}>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => navigate("/allNormalQuestions")}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\questionsandans.jpg"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => navigate("/allNormalStories")}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\cover_story.jpeg"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          )}

          {display === "assignment" && (
            <Grid container spacing={10}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => navigate("/allAssigments")}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\questions-answers.jpg"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => navigate("/addEssay")}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\EssayWriting.jpg"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                {/* <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                  // onClick={() => navigate("/addNormalQuestions")}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\stories.webp"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card> */}
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </>
  );
};

export default TeachersDashboard;
