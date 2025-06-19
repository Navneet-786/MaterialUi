import { Button, IconButton, styled, Tooltip } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import { CloudUpload, ShoppingBasket } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const Buttons = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Button>TEXT</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Button
          disabled
          variant="contained"
          onClick={() => alert("this is disabled")}
        >
          Disabled
        </Button>
        <Button
          disableElevation
          variant="contained"
          onClick={() => alert("this is disableElevation")}
        >
          disableElevation
        </Button>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="error">error</Button>
        <Button color="info">info</Button>
        <Button color="success">success</Button>
        <Button color="warning">warning</Button>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="contained" endIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="contained" startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Home" color="secondary">
          <HomeIcon />
        </IconButton>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Tooltip title="click to see loading">
          <IconButton onClick={() => setLoading(true)} loading={isLoading}>
            <ShoppingBasket />
          </IconButton>
        </Tooltip>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUpload />}
        >
          upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="contained" loading={true} loadingPosition="start">
          Loading
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
