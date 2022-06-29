import { Button } from "@material-ui/core";
import * as items from "../../organisms/ItemCard/ItemCard";
import "./CartItem.css";

const { addedCartItems } = items;

type Props = {
  item: items.Sneaker;
  addToCart: (clickedItem: items.Sneaker) => void;
  removeFromCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
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
              onClick={() => removeFromCart(JSON.parse(item.id))}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>

          <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
