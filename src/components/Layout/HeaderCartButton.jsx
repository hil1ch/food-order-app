import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import { CartIcon } from "../Cart/CartIcon";

export function HeaderCartButton(props) {

  const cartContext = useContext(CartContext);
  const cartNumbers = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartNumbers}</span>
    </button>
  );
}
