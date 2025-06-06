import { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{ id: props.id, type: "number", min: "1", defaultValue: "1" }}
      />
      <button>Добавть</button>
      {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
  );
}
