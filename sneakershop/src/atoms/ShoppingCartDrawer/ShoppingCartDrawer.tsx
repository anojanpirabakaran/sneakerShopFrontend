import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import MuiButton from "../MuiButton/MuiButton";

type Anchor = "right";

export default function ShoppingCartDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [cartItems, setCartItems] = useState<string>("");

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : ""}
      {cartItems.length !== 0 ? <h2>Total: $</h2> : ""}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <MuiButton onClick={toggleDrawer(anchor, true)}>
            {" "}
            {<ShoppingCartIcon />}
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
