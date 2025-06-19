import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const DialogueBoxes = ({ setAgree }) => {
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>
        Click to open Dialogue box
      </Button>
      <Dialog open={open} onClose={closeHandler}>
        {/* dialogue title */}
        <DialogTitle>{`Hey ! this is Dialogue box`}</DialogTitle>
        {/* dialogue content */}
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            eaque qui dolores numquam sequi ipsam debitis, aperiam commodi
            expedita quaerat error. Delectus, placeat consequuntur quae
            veritatis laudantium facilis nobis, ea et veniam ullam eum ab
            aliquid magni soluta cum fugit?
          </DialogContentText>
        </DialogContent>
        {/* dialogue Actions */}
        <DialogActions>
          <Button onClick={closeHandler}> DisAgree</Button>
          <Button
            onClick={() => {
              setOpen(false);
              setAgree(true);
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogueBoxes;
