import styles from './Footer.module.css';
import odigoLogoFooter from "./svg/odigo-logo-footer.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footerItem}>
          <div className={styles.footerLogo}>
            <img
              src={odigoLogoFooter}
              alt="Discover Amazing places in Japan"
            />
          </div>
          <nav className={styles.footerNav}>
            <ul>
              <li >
                <h3 className={styles.footerMenuTitle}>Company</h3>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>About</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Team</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Careers</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Privacy Policy</a>
              </li>
            </ul>
            <ul>
              <li >
                <h3 className={styles.footerMenuTitle}>Locations</h3>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Tokio</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Kyoto</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Osaka</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Hokkaido</a>
              </li>
            </ul>
            <ul>
              <li >
                <h3 className={styles.footerMenuTitle}>Social Media</h3>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Facebook</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Twitter</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>Instagram</a>
              </li>
              <li >
                <a href="#!" className={styles.footerMenuLink}>YouTube</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
export default Footer;