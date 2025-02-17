import styles from './HeaderCartButton.module.css';
import { CartIcon } from '../Cart/CartIcon';

export function HeaderCartButton() {
   return <button className={styles.button}>
      <span className={styles.icon}>
         <CartIcon />
      </span>
      <span>
         Корзина
      </span>
      <span className={styles.badge}>
         2
      </span>
   </button>
}