import CloseIcon from "@mui/icons-material/Close";
import { Card, CardMedia, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContext } from "react";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import FormDialog from "../FormDialog/FormDialog";
import "./FullScreenDialogCheckout.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialogCheckout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Checkout
      </Button>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Checkout
            </Typography>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Total: {cartItems.reduce((acc, item) => acc + item.price, 0)}$
            </Typography>
            <FormDialog></FormDialog>
          </Toolbar>
        </AppBar>
        <Grid container item md={6} className="checkoutItem">
          {cartItems &&
            cartItems.map((sneaker) => (
              <Grid key={sneaker.id} container item md={12}>
                <Card key={sneaker.id}>
                  <Grid container item md={12}>
                    <Grid item md={6}>
                      <CardMedia
                        style={{
                          border: "3px solid #e3e3e3;",
                        }}
                        component="img"
                        image={sneaker.image}
                        alt="image"
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="sneaker_name"
                      >
                        {sneaker.brand + " " + sneaker.name}
                      </Typography>
                      <Typography variant="body2" className="sneaker_price">
                        CHF {sneaker.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "left" }}
                        className="sneaker_description"
                      >
                        {sneaker.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Dialog>
    </div>
  );
}
