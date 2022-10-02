import {Product} from "../../domain/product";
import {useStore} from "../../services/store";
import {Cookie} from "../Cookie";
import styles from "./Front.module.css";

export function Front() {
  const { sushi } = useStore();

  return (
    <main>
      <h1>Sushi</h1>

      <ul className={styles.list}>
        {sushi.map((sush: Product) => (
          <li key={sush.id}>
            <Cookie cookie={sush} />
          </li>
        ))}
      </ul>
    </main>
  );
}
