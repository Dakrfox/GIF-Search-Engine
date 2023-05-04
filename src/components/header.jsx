import styles from "@styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo">
        <Link href={"/"}>
          <h2 className="pointer">DK-GSE</h2>
        </Link>
      </div>
    </div>
  );
}
