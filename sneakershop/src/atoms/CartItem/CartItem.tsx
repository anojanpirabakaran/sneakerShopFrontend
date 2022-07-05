import { Button } from "@material-ui/core";
import { useContext } from "react";
import * as items from "../../organisms/ItemCard/ItemCard";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import "./CartItem.css";

/**
 * Prop type for sneaker
 */
type Props = {
  item: items.Sneaker;
};

/**
 * Cart item which is in the shopping Cart
 * @param item which is in cart
 * @returns one cart item each
 */
const CartItem = ({ item }: Props) => {
  const { addItem, deleteItem } = useContext(ShoppingCartContext);

  return (
    <>
      <div>
        <h4 className="itemTitle">{item.brand + " " + item.name}</h4>
        <div>
          <img className="img" src={item.image} alt={item.name} />
          <div className="buttons">
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => deleteItem(item)}
              className="deleteButton"
            >
              -
            </Button>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addItem(item)}
              className="addButton"
            >
              +
            </Button>
          </div>

          <div className="information">
            <p>Price: ${item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
