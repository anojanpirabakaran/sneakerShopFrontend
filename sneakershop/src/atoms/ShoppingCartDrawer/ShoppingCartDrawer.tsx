import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useContext } from "react";
import * as items from "../../organisms/ItemCard/ItemCard";
import CartItem from "../CartItem/CartItem";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import FullScreenDialogCheckout from "../FullScreenDialogCheckout/FullScreenDialogCheckout";
import MuiButton from "../MuiButton/MuiButton";
import "./ShoppingCartDrawer.css";

type Anchor = "right";

export default function ShoppingCartDrawer() {
  const { cartItems } = useContext(ShoppingCartContext);

  const [state, setState] = React.useState({
    right: false,
  });

  const calculateTotal = (items: items.Sneaker[]) => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2 className="title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="total">No items in cart.</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {cartItems.length !== 0 ? (
        <Box>
          <h2 className="total">Total: ${calculateTotal(cartItems)}</h2>
          <Box className="checkout">
            <FullScreenDialogCheckout></FullScreenDialogCheckout>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <MuiButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              backgroundColor: "#628395",
              "&:hover": {
                backgroundColor: "inherit",
              },
            }}
          >
            {" "}
            {<ShoppingCartIcon sx={{ color: "white" }} />}
          </MuiButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
