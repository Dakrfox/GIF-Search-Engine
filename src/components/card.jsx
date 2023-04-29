import Image from "next/image";
import styles from "@styles/card.module.scss"
import gif from "@icons/giphy.gif"

export default function Card({item}) {
    return (
        <div className={styles.card}>
            <div className={styles.gif}>
                <Image className={styles["gif-image"]} src={item?.link} width={250} height={250} alt="gif" />
            </div>
            <div className={styles.keywords}>
                <p><span>Keywords:</span> {item?.keywords.join(" -  ")}</p>
            </div>
        </div>
    )
} 