import Image from "next/image";
import styles from "@styles/card.module.scss"
import gif from "@icons/giphy.gif"

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.gif}>
                <Image src={gif} width={250} height={250} alt="gif" />
            </div>
            <div className={styles.keywords}>
                <p><span>Keywords:</span> keyword1, keyword2, keyword3</p>
            </div>
        </div>
    )
} 