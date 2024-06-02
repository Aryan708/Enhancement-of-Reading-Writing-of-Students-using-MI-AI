import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleStory = ({ story }) => {
    const navigate = useNavigate()
  return (
    <>
      <Card sx={{ width: 210, height: "250px", mb: 3 }}>
        <CardActionArea onClick={() => navigate(`/story/${story._id}`)}>
          <CardMedia
            component="img"
            height="150"
            image={`http://${window.location.hostname}:4000/${story.image}`}
            alt="story"
            style={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {story.title.substring(1, 20)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
    </>
  );
};

export default SingleStory;
