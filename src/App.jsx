import { useState } from "react";
import "./App.css";
import BackDrops from "./components/BackDrops";
import Buttons from "./components/Buttons";
import CheckBoxes from "./components/CheckBoxes";
import DialogueBoxes from "./components/DialogueBoxes";
import RadiooButton from "./components/RadiooButton";
import SelectComp from "./components/SelectComp";
import Switches from "./components/Switches";
import Volumee from "./components/Volumee";
import { Alert, Skeleton, Stack } from "@mui/material";
import Pagess from "./components/Pagess";
import HorizontalLinearStepper from "./components/HorrizontalLineStepper";
import Gridd from "./components/Gridd";
function App() {
  const [agree, setAgree] = useState(false);
  const [time, setTime] = useState(true);
  setTimeout(() => {
    setTime(false);
  }, 5000);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {time ? (
        <Stack direction={"column"} spacing={2}>
          <Skeleton
            variant="rectangular "
            width={400}
            height={40}
            animation="wave"
          />
          <Skeleton variant="rectangular " width={400} height={40} />
          <Skeleton variant="rectangular " width={400} height={40} />
        </Stack>
      ) : (
        <Buttons />
      )}
      <CheckBoxes />
      <RadiooButton />
      <SelectComp />
      <Volumee />
      <Switches />
      <BackDrops />
      <DialogueBoxes setAgree={setAgree} />
      {agree ? <Alert severity="success">Thanks for Agree</Alert> : null}

      <Pagess />

      <HorizontalLinearStepper />
      <Gridd />
    </div>
  );
}

export default App;
