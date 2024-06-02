import {
  Button,
  Container,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  deleteAssignmentQuestionsById,
  getAssignmentQuestions,
} from "../../../api/AssignmentQuestionsApi";
import { toast } from "react-toastify";
import moment from "moment/moment";

const AllAssignments = () => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  // Paginations
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getAllAssignments = async () => {
    try {
      const res = await getAssignmentQuestions();
      const item = [];
      for (let i of res.data) {
        if (i.questionType !== "Essays") {
          item.push(i);
        }
      }
      setData(item);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAssignments();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  const handleDelete = async (id) => {
    try {
      await deleteAssignmentQuestionsById(id);
      setData(data.filter((data) => data._id !== id));
      toast.success("Question Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
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
                  All Assignments Questions
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {/* <FormControl sx={{ width: "30ch" }} variant="outlined">
              <TextField
                id="outlined-adornment-weight"
                label="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                size="small"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </FormControl> */}
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate("/addAssignments");
                  }}
                >
                  ADD
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Sr. No.
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Questions
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Correct Answer
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Types
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isLoding ? (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        align="center"
                        style={{ paddingTop: "2rem" }}
                        colSpan={7}
                      >
                        <Typography
                          sx={{ fontWeight: "bold" }}
                          style={{ fontSize: "2rem" }}
                        >
                          Loading...
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : currentRecords.length > 0 ? (
                    currentRecords.map((data, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.question}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.correct}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.questionType}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {moment(data.createdAt).utc().format("YYYY-MM-DD")}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              {/* <IconButton
                                sx={{ display: "inline" }}
                                style={{ color: "rgb(112 47 239)" }}
                                  onClick={() => navigate(`/viewAssignment/${data.id}`)}
                              >
                                <VisibilityIcon />
                              </IconButton> */}
                              {/* <IconButton
                                sx={{ display: "inline" }}
                                aria-label="delete"
                                style={{ color: " rgb(49, 126, 235)" }}
                                //   onClick={() => navigate(`/editHod/${data.id}`)}
                              >
                                <BorderColorIcon />
                              </IconButton> */}
                              <IconButton
                                sx={{ display: "inline" }}
                                aria-label="delete"
                                style={{ color: "red" }}
                                onClick={() => handleDelete(data._id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{ paddingTop: "2rem" }}
                        colSpan={7}
                      >
                        <Typography
                          sx={{ fontWeight: "bold" }}
                          style={{ fontSize: "2rem" }}
                        >
                          No Data to Display
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              m={2}
              //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              //   sx={boxDefault}
            >
              <Pagination
                style={{
                  display: "flex",
                  alignItems: "right",
                }}
                count={nPages}
                color="secondary"
                onChange={handlePageChange}
              />
            </Box>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default AllAssignments;
