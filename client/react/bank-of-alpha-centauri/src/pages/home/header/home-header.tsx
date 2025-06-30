import styles from "./home-header.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.fdicContainer}>
        <span className={styles.textOne}><em>Bank of Alpha Centauri products: </em></span>
        <span className={styles.FDIC}><strong>FDIC</strong></span>
        <span className={styles.textTwo}><em>FDIC insured - Backed by the full faith and credit of the U.S. Government</em></span>
      </div>
    </div>
  );
};

export default HomeHeader;