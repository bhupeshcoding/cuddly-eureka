import styles from "./footer.module.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.mission}>Secure AI for a Better Tomorrow</h2>
          <p className={styles.description} id="footer">
            We're committed to building secure and reliable AI. Our vision is
            simple: free and accessible AI that ensures safety for all. Join us
            in making AI secure, and empower dreams to shape the future.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <a
              href="https://conference-eight-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Explore Our Platform
            </a>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupesh-joshi-/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bhupeshcoding"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          © 2025 Secure AI | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
