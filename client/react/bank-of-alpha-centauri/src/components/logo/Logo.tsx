import styles from "./Logo.module.scss";
import logoImg from "../../assets/images/logo.jpg";

interface LogoProps {
  gap: string;
  fontSize: string;
  letterSpacing: string;
  imageDimension: string;
  borderRadius: string;
}

const Logo: React.FC<LogoProps> = ({
  gap = ".5rem", 
  fontSize = "1.2rem", 
  letterSpacing = "2px", 
  imageDimension = "2rem", 
  borderRadius = "1rem"
}) => {
  return (
    <div className={styles.logoContainer} style={{ gap }}>
      <h2 className={styles.logoText} style={{ fontSize, letterSpacing }}>BANK OF ALPHA CENTAURI</h2>
      <img 
        src={logoImg} 
        alt="Alpha Centauri Bank logo image"
        style={{ width: imageDimension, height: imageDimension, borderRadius }} 
      />
    </div>
  );
}

export default Logo;