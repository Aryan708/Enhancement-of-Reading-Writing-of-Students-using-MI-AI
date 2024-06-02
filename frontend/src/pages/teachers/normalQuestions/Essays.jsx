import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addNormalQuestions } from "../../../api/NormalQuestionsApi";

const Essays = ({ questionType }) => {
  const [data, setData] = useState({
    question: "",
    status: "Pending",
    questionType: questionType,
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNormalQuestions(data)
    toast.success("Question Added Successfully")
    navigate("/allNormalQuestions")

  };

  return (
    <>
      <Container
        style={{ paddingTop: "40px", paddingBottom: "30px", width: 700 }}
      >
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
                Essays
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  // color: "rgb(45 43 235 / 87%)",
                  mt: 1,
                  ml: 1,
                }}
              >
                Write Essay
              </Typography>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  hidden
                  name="questionType"
                  value={questionType}
                  onChange={handleChange}
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={2}
                  placeholder="Enter Essay Topic"
                  style={{ width: 600, fontSize: "20px", marginTop: 2 }}
                  name="question"
                  value={data.question}
                  onChange={handleChange}
                />

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button type="submit" variant="contained" sx={{ width: "200px" }}>
                    Submit
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Essays;
