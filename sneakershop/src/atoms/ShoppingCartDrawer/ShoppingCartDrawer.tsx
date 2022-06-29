import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import MuiButton from "../MuiButton/MuiButton";
import * as items from "../../organisms/ItemCard/ItemCard";
import CartItem from "../CartItem/CartItem";
import "./ShoppingCartDrawer.css";

const { addedCartItems } = items;

type Anchor = "right";

export default function ShoppingCartDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [cartItems, setCartItems] = useState<items.Sneaker[]>([]);

  const addToCart = (sneaker: items.Sneaker) => {
    cartItems.push(sneaker);
    return sneaker;
  };

  const removeFromCart = () => {
    // cartItems.pop(sneaker.id);
    // return sneaker;
    return "";
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setCartItems(addedCartItems);
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const calculateTotal = (items: items.Sneaker[]) => {
    return items.reduce((acc, item) => acc + item.amount, 0);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2 className="title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="total">No items in cart.</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length !== 0 ? (
        <h2 className="total">Total: ${calculateTotal(cartItems)}</h2>
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
              backgroundColor: "black",
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
