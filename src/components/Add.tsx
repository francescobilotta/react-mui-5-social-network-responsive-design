import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          bottom: 20,
          left: { md: 30, xs: "calc(50% - 25px)" },
          position: "fixed",
        }}
        onClick={() => setOpen(true)}
      >
        <Fab aria-label="add" color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          bgcolor="background.default"
          borderRadius={5}
          color="text.primary"
          height={280}
          p={3}
          width={400}
        >
          <Typography color="gray" textAlign="center" variant="h6">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ height: 30, width: 30 }}
            />
            <Typography fontWeight={500} variant="body1">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            multiline
            id="standard-multiline-static"
            placeholder="What's on your mind?"
            rows={3}
            sx={{ width: "100%" }}
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={3} mt={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            aria-label="outlined primary button group"
            variant="contained"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
