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
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import { toast } from "react-toastify";
import { getStudentsById } from "../../api/studentsApi";
import { user } from "../../common/Common";
import { AppStudentsNavbar } from "../../components/AppNavbar";
import Story from "./normalQuestions/Story";

import ReactDOM from "react-dom";
import { useSpeechSynthesis } from "react-speech-kit";

const options = [
  { value: "hi", label: "Hindi" },
  { value: "es", label: "Spanish" },
  { value: "zh", label: "Mandarin" },
  { value: "en", label: "English" },
];

const StudentsDashboard = () => {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState(false);

  const getstudent = async () => {
    try {
      const res = await getStudentsById(user.id);

      for (let i of res.data.assignmentsQuestions) {
        const d = new Date();

        if (
          moment(i.date).utc().format("YYYY-MM-DD") ===
          moment(d).utc().format("YYYY-MM-DD")
        ) {
          setData(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getstudent();
  }, []);

  const navigate = useNavigate();
  const handleNormalClick = () => {
    setDisplay(false);
  };

  const handleAssignmentClick = () => {
    setDisplay(true);
  };

  const handleAssignment = () => {
    if (data) {
      toast.success("Already Completed the Task");
    } else {
      navigate("/allStudentsAssignmentsQuestions");
    }
  };
  const handleEssay = () => {
    if (data) {
      toast.success("Already Completed the Task");
    } else {
      navigate("/essay");
    }
  };

  // // Voice Changes
  // const [selected, setSelected] = useState(options[defaultLanguage].value);
  // const onEnd = () => {
  //   // You could do something here after speaking has finished
  // };
  // const buttonClick = () => {
  //   //alert('Language is ' + selectedOption)
  //   var textArr = text.split(" ");
  //   speak({ voice, text: text });

  //   /*
  //   for (let i = 0; i < textArr.length; i++) {
  //     console.log(" Text is " + textArr[i]);
  //     let number = textArr[i];
  //     speak({ voice, text: number });
  //   }
  //   */
  // };
  // const [text, setText] = useState("");
  // const { speak, speaking, voices } = useSpeechSynthesis({
  //   onEnd,
  // });

  // //const voice = voices.find(({ lang }) => lang.startsWith("es"));
  // const voice = voices.find(({ lang }) => lang.startsWith(selected));

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: display
            ? `url('https://images.shiksha.com/mediadata/images/articles/1648190189phpwS36Md.jpeg')`
            : `url('https://png.pngtree.com/thumb_back/fh260/background/20201024/pngtree-abstract-scene-layout-in-pastel-colors-yellow-question-mark-3d-rendering-image_436004.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />
        <Container maxWidth="md" style={{ paddingTop: "150px" }}>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Paper>
                <Button variant="text" fullWidth onClick={handleNormalClick}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 1,
                      color: "rgb(45 43 235 / 87%)",
                    }}
                  >
                    Normal Questions
                  </Typography>
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Button
                  variant="text"
                  fullWidth
                  onClick={handleAssignmentClick}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      color: "rgb(45 43 235 / 87%)",
                    }}
                  >
                    Assignment Questions
                  </Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="md" style={{ paddingTop: "50px" }}>
          {!display && (
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => navigate("/allStudentsNormalQuestions")}
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
                <Story />
              </Grid>
            </Grid>
          )}

          {display && (
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={handleAssignment}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\assignmentQuestionandanswers.jpg"
                      alt="Questions and Answers"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={handleEssay}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="src\assets\essay.jpg"
                      alt="Essays"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          )}

          {/* <div>
            <h3> Select language of choice for voice rendering </h3>
            <Select
              defaultValue={options[defaultLanguage]}
              options={options}
              onChange={(event) => setSelected(event.value)}
              classNamePrefix="react-select"
              className="react-select--inline"
            />
           
            <input
              placeholder="Text to spell"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <h3> Click on click me to launch the voice</h3>
            <button style={{ marginLeft: "8px" }} onClick={buttonClick}>
              CickMe
            </button>
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default StudentsDashboard;
