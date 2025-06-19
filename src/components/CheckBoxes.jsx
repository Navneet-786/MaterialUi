import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const CheckBoxes = () => {
  const [checkedState, setchecked] = useState(false);
  const checkedHandle = (event) => {
    setchecked(!checkedState);
    console.log(event.target.checked);
  };
  return (
    <div>
      <h1>CheckBoxes</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox defaultChecked size="large" />
          <Checkbox defaultChecked size="large" color="success" />
          <Checkbox
            size="large"
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
            color="warning"
          />
          <Checkbox
            size="large"
            checked={checkedState}
            onChange={checkedHandle}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;
