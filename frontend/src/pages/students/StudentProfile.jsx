import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { user } from "../../common/Common";
import { AppStudentsNavbar } from "../../components/AppNavbar";
import validate from "../../validation/Profile";
import LockIcon from "@mui/icons-material/Lock";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { changeProfile } from "../../api/studentsApi";

const StudentProfile = () => {
  const [data, setData] = useState({
    _id: user.id,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
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
    const newErrors = validate(data);
    setErrors(newErrors);
    if (!Object.keys(newErrors).length) {
      if (data.newPassword !== data.confirmPassword) {
        toast.error("Password Didn't Match");
      } else {
        try {
          await changeProfile(data);
          localStorage.removeItem("token");
          navigate("/studentLogin");
          window.location.assign("/studentLogin");
          toast.success("Successfully Changed Password");
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/KMetFQX5UXdhydvbBzUxDA-1200-80.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "revert",
          backgroundSize: "cover",
        }}
      >
        <AppStudentsNavbar />
        <Box
          paddingTop={"8rem"}
          style={{ textAlign: "center", marginLeft: 350, display: "flex" }}
        >
          <Typography
            style={{ variant: "h5", component: "h3" }}
            sx={{
              fontFamily: "monospace",
              fontSize: "2rem",
              fontWeight: 500,
            }}
          >
            Hello,
          </Typography>
          <Typography
            style={{ variant: "h5", component: "h3" }}
            sx={{
              ml: 1,
              fontFamily: "monospace",
              fontSize: "2rem",
              fontWeight: 700,
              color: "green",
            }}
          >
            {user.name ? user.name?.toUpperCase() : ""}
          </Typography>
        </Box>
        <Container
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box width={"75%"}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Box style={{ paddingTop: "2rem" }}>
                  <Card
                    variant="outlined"
                    style={{ width: 400, height: 350, borderRadius: 100 }}
                  >
                    <img
                      style={{ width: 400, height: 350 }}
                      src="src\assets\reset-password-icon-29.jpg"
                      alt="Password"
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box style={{ marginTop: "2rem" }}>
                  <Card variant="outlined" style={{ padding: "2rem" }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      style={{ paddingBottom: "2rem" }}
                    >
                      Change Password
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          paddingBottom: "1rem",
                        }}
                      >
                        {errors.oldPassword ? (
                          <LockIcon
                            sx={{ color: "#ef2929f5", mr: 1 }}
                            style={{ paddingBottom: "2rem" }}
                          />
                        ) : (
                          <LockIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          />
                        )}
                        <TextField
                          id="outlined-basic"
                          label="Old Password"
                          variant="outlined"
                          size="small"
                          name="oldPassword"
                          type="password"
                          value={data.oldPassword}
                          onChange={handleChange}
                          helperText={
                            errors.oldPassword ? (
                              <span style={{ color: "red" }}>
                                {errors.oldPassword}
                              </span>
                            ) : (
                              ""
                            )
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          paddingBottom: "1rem",
                        }}
                      >
                        {errors.newPassword ? (
                          <LockIcon
                            sx={{ color: "#ef2929f5", mr: 1 }}
                            style={{ paddingBottom: "2rem" }}
                          />
                        ) : (
                          <LockIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          />
                        )}
                        <TextField
                          id="outlined-basic"
                          label="New Password"
                          variant="outlined"
                          name="newPassword"
                          type="password"
                          size="small"
                          value={data.newPassword}
                          onChange={handleChange}
                          helperText={
                            errors.newPassword ? (
                              <span style={{ color: "red" }}>
                                {errors.newPassword}
                              </span>
                            ) : (
                              ""
                            )
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          paddingBottom: "1rem",
                        }}
                      >
                        {errors.confirmPassword ? (
                          <LockIcon
                            sx={{ color: "#ef2929f5", mr: 1 }}
                            style={{ paddingBottom: "2rem" }}
                          />
                        ) : (
                          <LockIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          />
                        )}
                        <TextField
                          id="outlined-basic"
                          label="Confirm Password"
                          variant="outlined"
                          name="confirmPassword"
                          type="password"
                          size="small"
                          value={data.confirmPassword}
                          onChange={handleChange}
                          helperText={
                            errors.confirmPassword ? (
                              <span style={{ color: "red" }}>
                                {errors.confirmPassword}
                              </span>
                            ) : (
                              ""
                            )
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          paddingBottom: "1rem",
                        }}
                      >
                        <input
                          type="hidden"
                          name="_id"
                          value={data._id === user.id}
                          onChange={handleChange}
                        />
                      </Box>

                      <Button type="submit" variant="contained" color="success">
                        <Typography variant="h5" component="h3">
                          Change
                        </Typography>
                      </Button>
                    </form>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default StudentProfile;
