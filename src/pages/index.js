import GifPage from "@containers/GifPage.jsx";
import styles from "@styles/main.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.Content}>
        <GifPage />
      </div>
    </>
  );
}
