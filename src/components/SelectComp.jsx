import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SelectComp = () => {
  const [choice, setChoice] = useState([]);
  const changeHandler = (e) => {
    //if it is already selected then remove
    setChoice(() => [...e.target.value]);
    //else put into array
  };
  useEffect(() => {
    console.log(choice);
  }, [choice]);
  return (
    <>
      {" "}
      <FormControl>
        <InputLabel id="choice-select">Choices</InputLabel>
        <Select
          labelId="choice-select"
          id="demo-select"
          multiple
          value={choice}
          label="choices"
          onChange={changeHandler}
        >
          <MenuItem value="Engineer">Enginner</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
          <MenuItem value="Advocate">Advocate</MenuItem>
          <MenuItem value="Scientist">Scientist</MenuItem>
          <MenuItem value="Politician">Politician</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
        </Select>
      </FormControl>
      <TextField select label="Select food">
        <MenuItem value="Curd">Curd</MenuItem>
        <MenuItem value="Panner">Panner</MenuItem>
        <MenuItem value="Rice">Rice</MenuItem>
      </TextField>
    </>
  );
};

export default SelectComp;
