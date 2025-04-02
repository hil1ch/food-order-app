import styles from "./Cart.module.css";
import { Modal } from "../UI/Modal";

export function Cart(props) {
  const cartItems = (
    <ul className={styles['card-items']}>
      {[{ id: props.id, name: "Sushi", amount: 2, price: 10.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
         <span>Итого:</span>
         <span>49.99</span>
      </div>
      <div className={styles.actions}>
         <button className={styles['button--alt']}>Закрыть</button>
         <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
}
