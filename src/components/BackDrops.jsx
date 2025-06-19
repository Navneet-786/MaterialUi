import { Backdrop, Button, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const BackDrops = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleChange}>
        Click to see Backdrop
      </Button>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            libero?
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Backdrop>
    </div>
  );
};

export default BackDrops;
