import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import { Box } from "@mui/material";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Box sx={{ p: 1, m: 1, display: "flex", flexDirection: "row" }}>
      <Demo />
      <Demo />
    </Box>
    <Box sx={{ p: 1, m: 1, display: "flex", flexDirection: "row" }}>
      <Demo />
      <Demo />
    </Box>
  </StyledEngineProvider>,
  document.querySelector("#root")
);
