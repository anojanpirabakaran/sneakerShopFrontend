import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import "./FormDialog.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const { cartItems } = React.useContext(ShoppingCartContext);

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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Download</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
