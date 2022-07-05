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

  function arrayToCsv(data: any[]) {
    return data
      .map((row) =>
        row
          .map(String)
          .map((v: string) => v.replaceAll('"', '""'))
          .map((v: any) => `"${v}"`)
          .join(",")
      )
      .join("\r\n");
  }

  let csv = arrayToCsv([
    [
      cartItems.map(
        (item) =>
          item.brand +
          " " +
          item.name +
          " " +
          item.description +
          " " +
          item.price +
          "\n"
      ),
    ],
  ]);

  function downloadBlob(content: BlobPart, filename: string, contentType: any) {
    let blob = new Blob([content], { type: contentType });
    let url = URL.createObjectURL(blob);

    let pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
  }

  const download = () => {
    return downloadBlob(csv, "Products.csv", "text/csv;charset=utf-8;");
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
          <Button onClick={download} href="http://localhost:3000/shop">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
