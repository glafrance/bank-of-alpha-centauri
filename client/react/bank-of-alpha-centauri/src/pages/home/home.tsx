import Logo from "../../components/logo/Logo";
import Search from "../../components/search/Search";
import HomeHeader from "./header/home-header";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles.pageContent}>
      <HomeHeader />
      <div className={styles.logoAndSearch}>
        <Logo />
        <Search />
      </div>
    </div>
  )
};

export default HomePage;