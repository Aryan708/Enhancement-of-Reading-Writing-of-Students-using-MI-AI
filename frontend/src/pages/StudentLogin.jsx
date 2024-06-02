import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Validate from "../validation/StudentsLoginValidate";
import { AppStudentsNavbar } from "../components/AppNavbar";

const StudentLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [isSwitch, setIsSwitch] = useState(false);

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
        if (isSwitch) {
          const res = await axios.post(
            `http://${window.location.hostname}:4000/api/teachers/login`,
            data
          );
          localStorage.setItem("token", JSON.stringify(res.data));

          toast.success("Logged In Successfully");
          navigate("/teacherDashboard");
          window.location.assign("/teacherDashboard");
        } else {
          const res = await axios.post(
            `http://${window.location.hostname}:4000/api/students/login`,
            data
          );
          localStorage.setItem("token", JSON.stringify(res.data));

          toast.success("Logged In Successfully");
          navigate("/studentDashboard");
          window.location.assign("/studentDashboard");
        }
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

        <Container
          style={{
            paddingTop: 100,
            paddingBottom: 20,
            width: isSwitch ? "40%" : "75%",
          }}
        >
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
              {isSwitch ? "TEACHER" : "STUDENT"} LOGIN FORM
            </Typography>
          </Box>
          {isSwitch ? (
            <Paper>
              <div
                style={{
                  minHeight: "60vh",
                  //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                  backgroundImage: `url('https://img.freepik.com/free-vector/simple-blue-gradient-background-business_53876-113753.jpg')`,

                  //   backgroundPosition: "center",
                  // backgroundRepeat: "initial",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    paddingTop: 3,
                    mr: 3,
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        value={isSwitch}
                        checked={isSwitch}
                        onChange={(e) => setIsSwitch(e.target.checked)}
                      />
                    }
                    label={isSwitch ? "Teacher" : "Student"}
                  />
                </Box>
                <Box sx={{ paddingTop: 2, marginX: 10, paddingBottom: 2 }}>
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
                  </form>
                </Box>
              </div>
            </Paper>
          ) : (
            <Paper>
              <Grid container>
                <Grid item xs={6}>
                  <div
                    style={{
                      minHeight: "75vh",
                      //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
                      backgroundImage: isSwitch
                        ? ""
                        : `url('https://img.freepik.com/free-vector/empty-kindergarten-room-with-rainbow-sky-wallpaper_1308-59475.jpg')`,

                      //   backgroundPosition: "center",
                      backgroundRepeat: "revert",
                      backgroundSize: "cover",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ paddingTop: 18 }}>
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
                    <Box
                      sx={{
                        paddingTop: 3,
                        mr: 3,
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Switch
                            value={isSwitch}
                            checked={isSwitch}
                            onChange={(e) => setIsSwitch(e.target.checked)}
                          />
                        }
                        label={isSwitch ? "Teacher" : "Student"}
                      />
                    </Box>
                    <Box sx={{ paddingTop: 3, marginX: 10 }}>
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
                        <Box style={{ display: "flex", justifyContent: "end" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("/studentRegister")}
                          >
                            Register
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Container>
      </div>
    </>
  );
};

export default StudentLogin;
