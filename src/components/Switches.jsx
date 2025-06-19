import { FormControlLabel, FormGroup, Stack, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";

const Switches = () => {
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    setCheck(!check);
  };
  useEffect(() => {
    console.log(check);
  }, [check]);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Switch color="secondary" />
        <Switch defaultChecked color="warning" />
        <Switch disabled color="error" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="label" />

          <FormControlLabel
            required
            control={<Switch defaultChecked />}
            label="required"
          />
          <FormControlLabel
            disabled
            control={<Switch defaultChecked />}
            label="label"
          />
        </FormGroup>

        <FormControlLabel
          control={
            <Switch
              checked={check}
              onChange={handleChange}
              color={check ? "secondary" : ""}
            />
          }
          label={check ? `DarkMode` : "LightMode"}
        />
      </Stack>
    </div>
  );
};

export default Switches;
