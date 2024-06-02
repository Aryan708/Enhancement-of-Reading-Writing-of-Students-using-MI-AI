import {
  Box,
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
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppStudentsNavbar } from "../../../../components/AppNavbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { addAssignmentQuestions, deleteAssignmentQuestionsById, getAssignmentQuestions } from "../../../../api/AssignmentQuestionsApi";
import { toast } from "react-toastify";

const EssayAssignments = () => {
  const [data, setData] = useState({
    question: "",
    status: "Pending",
    questionType: "Essays",
  });

  const [essay, setEssay] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  // Paginations
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getAllAssignments = async () => {
    try {
      const res = await getAssignmentQuestions()
      const item = [];
      for (let i of res.data) {
        if (i.questionType === "Essays") {
          item.push(i);
        }
      }
      setEssay(item);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAssignments();
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAssignmentQuestions(data)
    setData({
      question: "",
      status: "Pending",
      questionType: "Essays",
    });
    toast.success("Essay Topic Added Successfully");

    getAllAssignments();
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = essay.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(essay.length / recordsPerPage);

  const handleDelete = async (id) => {
    try {
      await deleteAssignmentQuestionsById(id);
      setEssay(essay.filter((essay) => essay._id !== id));
      toast.success("Essay Deleted Successfully");

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
          backgroundImage: `url('https://www.gyanipandit.com/en/wp-content/uploads/2021/04/How-to-Write-Good-Essay-cfffb44b.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <AppStudentsNavbar />
        <Container
          style={{ paddingTop: "120px", paddingBottom: "30px", width: 700 }}
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
                    value={data.questionType}
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
        <Container>
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
                      Essay Topics
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Types
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
                            {data.questionType}
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

export default EssayAssignments;
