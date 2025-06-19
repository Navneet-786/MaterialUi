import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";

const RadiooButton = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log("Selected Gender:", value);
  }, [value]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <FormControl>
        <FormLabel id="gender">Gender</FormLabel>
      </FormControl>
      <RadioGroup aria-label="gender" name="Gender">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Others" control={<Radio />} label="Others" />
      </RadioGroup>

      <FormControl>
        <FormLabel id="gender">Gender</FormLabel>
      </FormControl>
      <RadioGroup
        aria-label="gender"
        name="Gender"
        row
        onChange={handleChange}
        value={value}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Others" control={<Radio />} label="Others" />
      </RadioGroup>
    </div>
  );
};
export default RadiooButton;
