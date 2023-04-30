import Image from "next/image";
import GenContainer from "@components/genericContainer";
import styles from "@styles/detailedGif.module.scss"
import share from "@icons/share-social-outline.svg"
import download from "@icons/cloud-download-outline.svg"
import flag from "@icons/flag-outline.svg"

export default function detailedGif(){
    return(
        <section>
            <h2 className={styles.title}>GIF NAME</h2>
            <div className={styles["main-container"]}>
                <div className={`${styles.content} ${styles.left}`}>
                    <Image src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" width={500} height={500} alt="gif"/> 
                </div>
                <div className={styles.middle}>
                    <div className={styles.icons_container}>
                        <Image width={20} height={20} src={share} alt="share"/>
                    </div>
                    <div className={styles.icons_container}>
                        <Image width={20} height={20} src={download} alt="download"/>
                    </div>
                    <div className={styles.icons_container}>
                        <Image width={20} height={20} src={flag} alt="report"/>
                    </div>
                </div>
                <div className={`${styles.content} ${styles.right}`}>
                    <GenContainer/>
                </div>
            </div>
        </section>
    );
}