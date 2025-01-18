import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>🚀 SpaceXplorer</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="/" className={styles.navItem}>
              Home
            </a>
          </li>
          <li>
            <a
              href="https://snapchat-smoky.vercel.app/"
              className={styles.navItem}
            >
              About(Ask AI)
            </a>
          </li>
          <li>
            <a href="#footer" className={styles.navItem}>
              Missions
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
