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
import ForwardIcon from "@mui/icons-material/Forward";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AppLoginNavbar } from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Validate from "../validation/StudentsLoginValidate";

const TeacherLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
        const res = await axios.post(
          `http://${window.location.hostname}:4000/api/teachers/login`,
          data
        );
        localStorage.setItem("token", JSON.stringify(res.data));

        toast.success("Logged In Successfully");
        navigate("/teacherDashboard");
        window.location.assign("/teacherDashboard");
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
        <AppLoginNavbar />

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
              TEACHER LOGIN FORM
            </Typography>
          </Box>
          <Paper>
            <Grid container>
              <Grid item xs={6}>
                <div
                  style={{
                    minHeight: "75vh",
                    //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                    backgroundImage: `url('https://img.freepik.com/free-vector/empty-kindergarten-room-with-rainbow-sky-wallpaper_1308-59475.jpg')`,

                    //   backgroundPosition: "center",
                    backgroundRepeat: "revert",
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ paddingTop: 25 }}>
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
                      // sx={{ color: "white" }}
                    >
                      To{" "}
                      <span style={{ color: "blueviolet", fontSize: "50px" }}>
                        FluentU
                      </span>
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ color: "blue", ml: 5, mt: 2 }}
                    >
                      Please Login <ForwardIcon sx={{ mr: 0.5, pt: 2 }} />
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    minHeight: "75vh",
                    //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                    backgroundImage: `url('https://img.freepik.com/free-vector/empty-sky-nature-scene-park_1308-48471.jpg')`,

                    //   backgroundPosition: "center",
                    // backgroundRepeat: "initial",
                    backgroundSize: "cover",
                  }}
                >
                  <Box sx={{ paddingTop: 10, marginX: 10 }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        variant="h4"
                        component="div"
                        // sx={{ color: "white" }}
                      >
                        Login
                      </Typography>
                    </Box>
                    <form
                      onSubmit={handleSubmit}
                      style={{ width: "300px", paddingTop: "5px" }}
                    >
                      <FormLabel
                        component="legend"
                        sx={{ marginLeft: "25px", fontWeight: "bold" }}
                      >
                        Email
                      </FormLabel>
                      <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextField
                          label="Email"
                          id="emailName"
                          size="small"
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          sx={{ width: 250, marginLeft: 2 }}
                        />
                        {errors && errors.email && (
                          <FormHelperText
                            id="outlined-weight-helper-text"
                            style={{ color: "red" }}
                          >
                            {errors.email}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormLabel
                        component="legend"
                        sx={{ marginLeft: "25px", fontWeight: "bold" }}
                      >
                        Password
                      </FormLabel>
                      <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextField
                          label="Password"
                          id="Password"
                          size="small"
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          sx={{ width: 250, marginLeft: 2 }}
                        />
                        {errors && errors.password && (
                          <FormHelperText
                            id="outlined-weight-helper-text"
                            style={{ color: "red" }}
                          >
                            {errors.password}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "1rem",
                        }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="success"
                          style={{
                            fontSize: "18px",
                            width: 200,
                            marginBottom: "1rem",
                          }}
                        >
                          Login
                        </Button>
                      </Box>
                      {/* <Box style={{ display: "flex", justifyContent: "end" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("/studentRegister")}
                          >
                            Register
                          </Button>
                        </Box> */}
                    </form>
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

export default TeacherLogin;
