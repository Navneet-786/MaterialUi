import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Box, Slider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const Volumee = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const changeHandler = (event, newValue) => {
    setSliderValue(newValue);
  };
  useEffect(() => {
    console.log(sliderValue);
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Box sx={{ width: "800px" }}>
        <Stack direction="row" spacing={2} sx={{ width: "40%" }}>
          <VolumeDown />
          <Slider value={sliderValue} onChange={changeHandler} />
          <VolumeUp />
        </Stack>
      </Box>
      <Box sx={{ width: "800px" }}>
        <Stack direction="row" spacing={2} sx={{ width: "40%" }}>
          <VolumeDown />
          <Slider
            // defaultValue={50} ye tb diya jata hi jb component control na ho
            valueLabelDisplay="auto"
            value={sliderValue}
            onChange={changeHandler}
          />
          <VolumeUp />
        </Stack>
      </Box>
      <Box sx={{ width: "800px" }}>
        <Stack direction="row" spacing={2} sx={{ width: "40%" }}>
          <VolumeDown />
          <Slider
            // defaultValue={50} ye tb diya jata hi jb component control na ho
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            min={20}
            max={100}
            color="secondary"
            marks
          />
          <VolumeUp />
        </Stack>
      </Box>
    </div>
  );
};

export default Volumee;
