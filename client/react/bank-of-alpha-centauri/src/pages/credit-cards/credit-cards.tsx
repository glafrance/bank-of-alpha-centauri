import { Link } from "react-router-dom";
import styles from "./credit-cards.module.scss";

const CreditCardsPage = () => {
  return (
    <div className={styles.pageContent}>
      <h1 className={styles.title}>UNDER CONSTRUCTION</h1>
      <Link to="/" className={styles.link}>Go to the <span className={styles.bankName}>Bank of Alpha Centauri</span> Home Page</Link>
    </div>
  );
}

export default CreditCardsPage;