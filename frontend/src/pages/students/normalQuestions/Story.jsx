import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate("/allStories")}>
          <CardMedia
            component="img"
            height="200"
            image="src\assets\story.png"
            alt="green iguana"
            style={{ objectFit: "fill" }}
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All Stories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Let's Listen To The Stories
            </Typography>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </>
  );
};

export default Story;
