import styles from './Header.module.css';
import odigoLogo from './svg/odigo-logo.svg';

function Header() {
    return (
        <header className={styles.container}>
            <div className="wrapper">
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>
                        <a href="/" className={styles.link}>
                            <img
                                src={odigoLogo}
                                alt="Discover Amazing places in Japan"
                            />
                        </a>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <a href="#articles" className={styles.link}>Articles</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#locations" className={styles.link}
                                >Locations</a
                                >
                            </li>
                            <li className={styles.item}>
                                <a href="#videos" className={styles.link}>Videos</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#sign-in" className={styles.link}>Sign in</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.burger}>
                        <span className={styles.lineFirst}></span>
                        <span className={styles.lineSecond}></span>
                        <span className={styles.lineThird}></span>
                    </div>
                </div>
            </div>
        </header >
    );
}
export default Header;