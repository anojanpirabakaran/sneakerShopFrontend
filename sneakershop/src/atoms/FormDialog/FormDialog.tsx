import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./FormDialog.css";
import { Input } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Complete Shopping
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send invoice via email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To complete this purchase, enter your email address below. You will
            then receive your invoice by email. Once they have paid, their
            products will be sent to them.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="email"
            type="email"
            fullWidth
            variant="standard"
            className="email"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
