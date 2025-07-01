import { Link } from "react-router-dom";

import styles from "./products-header.module.scss";

const ProductsHeader = () => {
  return (
    <nav className={styles.productHeader}>
      <Link to="/checking" className={styles.link}>Checking</Link>
      <Link to="/savings" className={styles.link}>Savings & CDs</Link>
      <Link to="/credit-cards" className={styles.link}>Credit Cards</Link>
      <Link to="/home-loans" className={styles.link}>Home Loans</Link>
      <Link to="/auto-loans" className={styles.link}>Auto Loans</Link>
      <Link to="/investing" className={styles.link}>Investing</Link>
    </nav>
  );
}

export default ProductsHeader;