import { Link } from "react-router-dom";
import styles from "./not-found.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.pageContent}>
      <h1 className={styles.title}>PAGE NOT FOUND</h1>
      <h3>The page you are looking for does not exist.</h3>
      <Link to="/" className={styles.link}>Go to the <span className={styles.bankName}>Bank of Alpha Centauri</span> Home Page</Link>
    </div>
  );
};

export default NotFoundPage;