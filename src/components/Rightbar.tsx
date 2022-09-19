import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { sm: "block", xs: "none" } }}>
      <Box position="fixed" width={300}>
        <Typography fontWeight={100} variant="h6">
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography fontWeight={100} mb={2} mt={2} variant="h6">
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem>
            <img
              alt="Breakfast"
              loading="lazy"
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Camera"
              loading="lazy"
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Honey"
              loading="lazy"
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
            />
          </ImageListItem>
        </ImageList>
        <Typography fontWeight={100} mt={2} variant="h6">
          Latest Conversations
        </Typography>
        <List
          sx={{ bgcolor: "background.paper", maxWidth: 360, width: "100%" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    color="text.primary"
                    component="span"
                    sx={{ display: "inline" }}
                    variant="body2"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    color="text.primary"
                    component="span"
                    sx={{ display: "inline" }}
                    variant="body2"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    color="text.primary"
                    component="span"
                    sx={{ display: "inline" }}
                    variant="body2"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
