import {
  Box,
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
import React, { useEffect, useState } from "react";
import { AppStudentsNavbar } from "../../../components/AppNavbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import { deleteStudentsById, getStudents } from "../../../api/studentsApi";

const AllStudents = () => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  // Paginations
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getAllQuestions = async () => {
    try {
      const res = await getStudents();
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

//   const handleDelete = async (id) => {
//     try {
//       await deleteStudentsById(id);
//       setData(data.filter((data) => data._id !== id));
//       toast.success("Question Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };
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
        <Container sx={{ pt: 15, pb: 10 }}>
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
                  All Students
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
                {/* <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate("/addNormalQuestions");
                  }}
                >
                  ADD
                </Button> */}
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
                      First Name
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Last Name
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Phone Number
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      School Name
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Address
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
                            {data.firstName}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.lastName}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.email}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.phoneNumber}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.schoolName}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            {data.address}
                          </TableCell>
                          <TableCell
                            style={{ textAlign: "center", fontSize: "14px" }}
                          >
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <IconButton
                                sx={{ display: "inline" }}
                                style={{ color: "rgb(112 47 239)" }}
                                onClick={() =>
                                  navigate(`/viewStudent/${data._id}`)
                                }
                              >
                                <VisibilityIcon />
                              </IconButton>
                              {/* <IconButton
                                  sx={{ display: "inline" }}
                                  aria-label="delete"
                                  style={{ color: " rgb(49, 126, 235)" }}
                                  //   onClick={() => navigate(`/editHod/${data.id}`)}
                                >
                                  <BorderColorIcon />
                                </IconButton> */}
                              {/* <IconButton
                                sx={{ display: "inline" }}
                                aria-label="delete"
                                style={{ color: "red" }}
                                onClick={() => handleDelete(data._id)}
                              >
                                <DeleteIcon />
                              </IconButton> */}
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

export default AllStudents;
