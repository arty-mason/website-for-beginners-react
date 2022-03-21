import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.container}>
            <div className="wrapper">
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>
                        <a href="/" className={styles.link}>
                            <img
                                src={process.env.PUBLIC_URL + "/svg/odigo-logo.svg"}
                                alt="Discover Amazing places in Japan"
                            />
                        </a>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>s
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
                        <div className="header__nav-close">
                            <span className="header__nav-close-line"> </span>
                            <span className="header__nav-close-line"></span>
                        </div>
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