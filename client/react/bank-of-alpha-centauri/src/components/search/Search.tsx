import styles from "./Search.module.scss";
import searchImg from "../../assets/images/search-icon.png";

interface SearchProps {
  gap?: string;
  fontSize?: string;
  letterSpacing?: string;
  imageDimension?: string;
}

const Search: React.FC<SearchProps> = ({
  gap = ".3rem", 
  fontSize = ".8rem", 
  letterSpacing = "1px", 
  imageDimension = "1.2rem"
}) => {
  return (
    <div className={styles.searchContainer} style={{ gap }}>
      <h2 className={styles.searchText} style={{ fontSize, letterSpacing }}>Search</h2>
      <img 
        src={searchImg} 
        alt="Search text and icon"
        style={{ width: imageDimension, height: imageDimension }} 
      />
    </div>
  );
}

export default Search;