import Logo from "../../../components/logo/Logo";
import Search from "../../../components/search/Search";
import styles from "./logo-search.module.scss";

const LogoSearch = () => {
  return (
    <div className={styles.logoAndSearch}>
      <Logo />
      <Search />
    </div>
  );
}

export default LogoSearch;