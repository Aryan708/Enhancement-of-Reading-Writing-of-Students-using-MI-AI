import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { QuestionTypes } from "../../../common/Common";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import Audio from "./AssignmentsTypes/Audio";
import Fill from "./AssignmentsTypes/Fill";
import MCQ from "./AssignmentsTypes/MCQ";
import SpeakText from "./AssignmentsTypes/SpeakText";

const AddAssignmentsQuestions = () => {
  const [questionType, setQuestionType] = useState("MCQ");

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };

  useEffect(() => {
    // console.log("hello", questionType);
  }, [questionType]);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210510/pngtree-colorful-cool-school-assignments-education-image_700447.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />
        <Container style={{ paddingTop: "100px", width: 700 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
                  Select Questions Types
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  sx={{ width: 200, mt: 1.5, bgcolor: "white" }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">Types</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={questionType}
                    label="Question Types"
                    onChange={handleChange}
                  >
                    {QuestionTypes.map((type, index) => {
                      return (
                        <MenuItem value={type} key={type}>
                          {type}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {questionType === "MCQ" && <MCQ questionType={questionType} />}

        {/* {questionType === "Essays" && <Essays questionType={questionType} />} */}

        {questionType === "Audio" && <Audio questionType={questionType} />}
        {questionType === "Fill" && <Fill questionType={questionType} />}
        {questionType === "Speak" && <SpeakText questionType={questionType} />}
      </div>
    </>
  );
};

export default AddAssignmentsQuestions;
