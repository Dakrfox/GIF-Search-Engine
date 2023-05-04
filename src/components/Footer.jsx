import Image from "next/image";
import github_icon from "@logos/logo-github.svg";
import linkedIn from "@logos/logo-linkedin.svg";
import mail from "@logos/mail-outline.svg";
import styles from "@styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles.title}>
        <h2>DK-GIF Search Engine</h2>
      </div>
      <div className={styles["content-footer"]}>
        <div className={styles["grid-left"]}>
          <p className={styles.text}>
            Introducing my GIF search engine, a dynamic web application designed
            to provide users with a seamless and engaging way to discover and
            share their favorite animated images.
          </p>
        </div>
        <div className={styles["grid-right"]}>
          <ul>
            <li className={styles.list}>
              <Image
                src={github_icon}
                width={20}
                height={20}
                className={styles.icon}
                alt="github"
              />{" "}
              <a href="https://github.com/Dakrfox" target="_blank">
                @Dakrfox
              </a>{" "}
            </li>
            <li className={styles.list}>
              <Image
                src={linkedIn}
                width={20}
                height={20}
                className={styles.icon}
                alt="linkedin"
              />{" "}
              <a href="https://www.linkedin.com/in/dk-fox/" target="_blank">
                @dk-fox
              </a>{" "}
            </li>
            <li className={styles.list}>
              <Image
                src={mail}
                width={20}
                height={20}
                className={styles.icon}
                alt="mail"
              />{" "}
              <a href="mailto:business.nimh@outlook.com">
                business.nimh@outlook.com
              </a>
            </li>
          </ul>
        </div>
        <p>©2022 Dakrfox</p>
      </div>
    </div>
  );
}
