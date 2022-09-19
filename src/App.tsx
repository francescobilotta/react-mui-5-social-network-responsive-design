import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import * as React from "react";

import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
