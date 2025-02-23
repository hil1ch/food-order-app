import styles from "./Cart.module.css";

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
    <div>
      {cartItems}
      <div className={styles.total}>
         <span>Итого:</span>
         <span>49.99</span>
      </div>
      <div className={styles.actions}>
         <button className={styles['button--alt']}>Закрыть</button>
         <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
}
