import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";

const ViewAssignment = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/006/329/835/original/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-checklist-icon-3d-render-on-pink-background-vector.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />
        <Container sx={{ pt: 15 }}>
          <Box sx={{ marginBottom: "1rem" }}>
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
                  View Assignments
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                {/* <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate("/addAssignments");
                  }}
                >
                  ADD
                </Button> */}
              </Grid>
            </Grid>
          </Box>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default ViewAssignment;
