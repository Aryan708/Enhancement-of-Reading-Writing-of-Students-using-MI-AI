import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AppStudentsNavbar } from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";
import Validate from "../validation/StudentsRegisterValidate";
import { toast } from "react-toastify";
import axios from "axios";
import { addStudents } from "../api/studentsApi";

const StudentRegister = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    schoolName: "",
    address: "",
  });

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = Validate(data);
    setErrors(newErrors);
    if (!Object.keys(newErrors).length) {
      try {
        await addStudents(data);
        toast.success("Registered Successfully");
        navigate("/studentLogin");
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/back_pic/02/66/55/50578b1ecd8c4ae.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
        }}
      >
        <AppStudentsNavbar nav={"home"} />

        <Container style={{ paddingTop: 100, paddingBottom: 20, width: "75%" }}>
          <Box style={{ backgroundColor: "rgb(2 2 2 / 0.4)" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                py: 1,
              }}
            >
              STUDENT REGISTRATION FORM
            </Typography>
          </Box>
          <Paper>
            <Grid container>
              <Grid item xs={6}>
                <div
                  style={{
                    minHeight: errors.length !== 0 ? "108vh" : "83vh",
                    //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                    backgroundImage: `url('https://img.freepik.com/free-vector/empty-sky-nature-scene-park_1308-48471.jpg')`,

                    //   backgroundPosition: "center",
                    // backgroundRepeat: "initial",
                    backgroundSize: "cover",
                  }}
                >
                  <form
                    onSubmit={handleSubmit}
                    style={{ width: "450px", paddingTop: "5px" }}
                  >
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    First Name
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="First Name"
                        id="firstName"
                        size="small"
                        type="text"
                        name="firstName"
                        value={data.firstName}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.firstName && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.firstName}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Last Name
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="Last Name"
                        id="LastName"
                        size="small"
                        type="text"
                        name="lastName"
                        value={data.lastName}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.lastName && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.lastName}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Email
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="Email"
                        id="emailName"
                        size="small"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.email && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.email}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Password
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="Password"
                        id="Password"
                        size="small"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.password && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.password}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Phone Number
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="Phone Number"
                        id="PhoneNumber"
                        size="small"
                        type="text"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.phoneNumber && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.phoneNumber}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    School Name
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="School Name"
                        id="SchoolName"
                        size="small"
                        type="text"
                        name="schoolName"
                        value={data.schoolName}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.schoolName && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.schoolName}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormLabel
                    component="legend"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Address
                  </FormLabel> */}
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        color="success"
                        label="Address"
                        id="Address"
                        size="small"
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        //   style={{backgroundColor:"lightgray"}}
                        sx={{ width: 350, marginLeft: 7 }}
                      />
                      {errors && errors.address && (
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{ color: "red", marginLeft: 60 }}
                        >
                          {errors.address}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        style={{
                          fontSize: "20px",
                          width: 300,
                          marginBottom: "0.7rem",
                        }}
                      >
                        Register
                      </Button>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginBottom: "0.7rem",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate("/studentLogin")}
                        style={{ width: 200 }}
                      >
                        Login
                      </Button>
                    </Box>
                  </form>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    minHeight: errors.length !== 0 ? "108vh" : "83vh",
                    //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                    backgroundImage: `url('https://img.freepik.com/free-vector/empty-kindergarten-room-with-rainbow-sky-wallpaper_1308-59475.jpg')`,

                    //   backgroundPosition: "center",
                    backgroundRepeat: "revert",
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ paddingTop: 22 }}>
                    <Typography
                      variant="h4"
                      component="div"
                      // sx={{ color: "white" }}
                    >
                      Hello Welcome,
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      To{" "}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src="/src/assets/fluentu4.png"
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={"logo"}
                        loading="lazy"
                        style={{
                          width: "210px",
                          height: "100px",
                          borderRadius: 20,
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      // sx={{ color: "white" }}
                    >
                      <ArrowCircleLeftIcon sx={{ mr: 0.5, pt: 2 }} /> Please
                      Register
                    </Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default StudentRegister;
