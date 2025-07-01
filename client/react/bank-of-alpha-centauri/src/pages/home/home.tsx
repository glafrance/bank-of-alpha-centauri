import HomeHeader from "./header/home-header";
import styles from "./home.module.scss";
import LogoSearch from "./logo-search/logo-search";
import ProductsHeader from "./products-header/products-header";

const HomePage = () => {
  return (
    <div className={styles.pageContent}>
      <HomeHeader />
      <LogoSearch />
      <ProductsHeader />
    </div>
  )
};

export default HomePage;