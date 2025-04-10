import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useNavigate } from "react-router-dom";

export default function SuccessCreated({
  open,
  setOpen
}) {

    const navigate = useNavigate()

  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
      sx={{
        // background: '#',
        '& .MuiPaper-root': {
          background: '#E8D3CA'
        },
        '& .MuiBackdrop-root': {
          backgroundColor: '#231b1888' // Try to remove this to see the result
        }
      }}
      PaperProps={{ sx: { borderRadius: "1em" } }}
    >
      <DialogTitle>Success Cow Created</DialogTitle>
      <DialogContent>
        <p>
          Do you wish to create more cows, or go to the dashboard?
        </p>
      </DialogContent>
      <DialogActions>
        <button
          onClick={() => {
            window.location.reload()
          }}
          className="button secondary"
        >
          Create More
        </button>
        <button
          onClick={() => {navigate("/")
          }}
          className="button"
        >
          Go to Dashboard
        </button>
      </DialogActions>
    </Dialog>
  );
}
