import React from "react";
import Grid from "@mui/material/Grid";
// import { Box } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AppChatBoy from "../components/AppChatBoy";
import { useNavigate } from "react-router-dom";
import { AppHomeNavbar, AppStudentsNavbar } from "../components/AppNavbar";
import { useSpeechSynthesis } from "react-speech-kit";
import AppFooter from "../components/AppFooter";
import { Container, Divider, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const { speak } = useSpeechSynthesis();
  const text = "Hello Guys, My Name is Rajju, Welcome To FluentU";
  const handleOnClick = () => {
    speak({ text: text, rate: 1, pitch: 1 });
  };
  return (
    <>
      <AppHomeNavbar nav={"home"} />

      <div
        style={{
          width: "100%",
          minHeight: "105vh",
          //   backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-e-learning-course-banner-online-tutor-image_1375102.jpg')`,
          backgroundImage: `url('https://wallpapercave.com/wp/wp4278734.jpg')`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={10} sx={{ mt: 12, ml: 10 }}>
              <Box
                sx={{
                  m: 1,
                  height: 300,
                  mt: 15,
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "center" }}>
                  <Typography
                    variant="h4"
                    color="white"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    The free, fun, and effective way to
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "center" }}>
                  <Typography
                    variant="h4"
                    color="white"
                    component="div"
                    style={{ fontWeight: "bold", marginInline: "8rem" }}
                  >
                    learn a language!
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "center" }}>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "5rem",
                      width: "23rem",
                      borderRadius: "15px",
                      height: "3rem",
                      backgroundColor: "#58cd32",
                      "&:hover": {
                        backgroundColor: "#5ad931",
                      },
                    }}
                    onClick={() => navigate("/studentregister")}
                  >
                    <Typography
                      variant="h6"
                      color="white"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Get Started
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2}></Grid>
            {/* <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
              <Item>4</Item>
            </Grid> */}
          </Grid>
        </div>
        <Paper
          sx={{
            position: "fixed",
            right: 0,
            background: "transparent",
            boxShadow: "none",
            bottom: -4,
            mx: 5,
          }}
        >
          <AppChatBoy handleOnClick={handleOnClick} />
        </Paper>
      </div>

      <Container maxWidth="lg" style={{ marginBottom: "2rem" }}>
        <Box style={{ marginTop: "3rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex", flexDirection: "center" }}>
                <img
                  src="/src/assets/dolphin2.jpg"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{ width: "164px", borderRadius: 20 }}
                />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h5"
                  color="black"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  The world’s #1 way to learn a language
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="gray"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  Learning with FluentU is fun, and research shows that it
                  works! With quick, bite-sized lessons, you’ll earn points and
                  unlock new levels while gaining real-world communication
                  skills.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mt: "2rem" }} />

        <Box
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            color="#4a4343"
            component="div"
            // style={{  fontWeight: 'medium', marginInline: "1rem" }}
            sx={{ fontWeight: "bold" }}
          >
            Why you’ll love learning with FluentU
          </Typography>
        </Box>

        <Box style={{ marginTop: "2rem", marginLeft: "2rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="#4a4343"
                  component="div"
                  // style={{  fontWeight: 'medium', marginInline: "1rem" }}
                  sx={{ fontWeight: "bold" }}
                >
                  Effective and efficient
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="body1"
                  color="gray"
                  component="div"
                  // style={{  marginInline: "1rem" }}
                >
                  Our courses effectively and efficiently teach reading,
                  listening, and speaking skills.
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="#4a4343"
                  component="div"
                  // style={{  fontWeight: 'medium', marginInline: "1rem" }}
                  sx={{ fontWeight: "bold" }}
                >
                  Personalized learning
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="body1"
                  color="gray"
                  component="div"
                  // style={{  marginInline: "1rem" }}
                >
                  Combining the best of AI and language science, lessons are
                  tailored to help you learn at just the right level and pace.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <img
                  src="/src/assets/tablet.jpg"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{
                    width: "200px",
                    borderRadius: 20,
                    height: "180px",
                    marginTop: "4rem",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="#4a4343"
                  component="div"
                  // style={{  fontWeight: 'medium', marginInline: "1rem" }}
                  sx={{ fontWeight: "bold" }}
                >
                  Stay motivated
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="body1"
                  color="gray"
                  component="div"
                  // style={{  marginInline: "1rem" }}
                >
                  We make it easy to form a habit of language learning, with
                  game-like features, fun challenges, and reminders from our
                  friendly mascot, Duo the owl.
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="#4a4343"
                  component="div"
                  // style={{  fontWeight: 'medium', marginInline: "1rem" }}
                  sx={{ fontWeight: "bold" }}
                >
                  Have fun with it!
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="body1"
                  color="gray"
                  component="div"
                  // style={{  marginInline: "1rem" }}
                >
                  Effective learning doesn’t have to be boring! Build your
                  skills each day with engaging exercises and playful
                  characters.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mt: "3rem" }} />

        <Box style={{ marginTop: "3rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex", flexDirection: "center" }}>
                <img
                  // src="/src/assets/tablet1.png"
                  src="/src/assets/dolphin5.webp"
                  alt={"logo"}
                  loading="lazy"
                  // style={{ width: "164px", borderRadius: 20 }}
                  style={{ width: "164px", borderRadius: 20 }}
                />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h5"
                  color="black"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  FluentU for Schools
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="gray"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  Free teacher tools to help students learn languages through
                  the FluentU app, both in and out of the classroom.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mt: "3rem" }} />

        <Box style={{ marginTop: "3rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={1}></Grid>

            <Grid item xs={8}>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h5"
                  color="black"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  Effective and efficient courses
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Typography
                  variant="h6"
                  color="gray"
                  component="div"
                  style={{ fontWeight: "20px", marginInline: "1rem" }}
                >
                  Our courses effectively and efficiently teach reading,
                  listening, and speaking skills. Check out our About Us Page!
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "center", mt: "2rem" }}
              >
                <Button
                  variant="text"
                  sx={{ ml: 1 }}
                  onClick={() => navigate("/about")}
                >
                  <Typography
                    variant="h6"
                    // color="black"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    LEARN MORE ABOUT US
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex", flexDirection: "center", mt: 3 }}>
                <img
                  src="/src/assets/dolphin4.jpg"
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"logo"}
                  loading="lazy"
                  style={{ width: "250px", borderRadius: 20, height: "180px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
};

export default Home;
