import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";

function Post() {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        subheader="September 14, 2016"
        title="Shrimp and Chorizo Paella"
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{ bgcolor: "red" }}
          >
            R
          </Avatar>
        }
      />
      <CardMedia
        alt="Paella dish"
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography color="text.secondary" variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            icon={<FavoriteBorder />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
