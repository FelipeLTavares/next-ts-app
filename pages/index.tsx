import styles from "../styles/Home.module.css";
import { NewButton } from "../styles/GeneralStyles";

export default function Home() {
  return (
    <div className={styles.container}>
      <NewButton>New Button</NewButton>
    </div>
  );
}
