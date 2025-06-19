import { Paper, Stack } from "@mui/material";
import React from "react";

const Pagess = () => {
  return (
    <div style={{ height: "200px" }}>
      <Stack direction={"row"} spacing={4} sx={{ height: 200, width: "100%" }}>
        <Paper
          elevation={4}
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          this is paper
        </Paper>
      </Stack>
    </div>
  );
};

export default Pagess;
