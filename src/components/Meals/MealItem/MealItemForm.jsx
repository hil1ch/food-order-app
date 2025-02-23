import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{ id: props.id, type: "number", min: "1", defaultValue: "1" }}
      />
      <button>Добавть</button>
    </form>
  );
}
