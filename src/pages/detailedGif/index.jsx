import Image from "next/image";
import GenContainer from "@components/genericContainer";
import styles from "@styles/detailedGif.module.scss"
import share from "@icons/share-social-outline.svg"
import download from "@icons/cloud-download-outline.svg"
import flag from "@icons/flag-outline.svg"
import { useSelector } from "react-redux";
import { useState } from "react";
import  { useRouter } from "next/router";


export default function detailedGif() {
    const router = useRouter();
    const count = useSelector(state => state.counter)
    const [imageUrl, setImageUrl] = useState(count.link);

    const handleDownloadClick = () => {
        
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    (()=>{
        if (typeof window !== 'undefined') {
            (count.id ===0 && router.push("/"))
          }
    })();
    return (
        <>
        <section className={styles.seccion}>
            <h2 className={styles.title}>{count.name}</h2>
            <div className={styles["main-container"]}>
                <div className={`${styles.content} ${styles.left}`}>
                    <Image src={count.link} width={500} height={500} alt="gif" />
                </div>
                <div className={styles.middle}>
                    <div className={styles.icons_container}>
                        <Image width={20} height={20} src={share} alt="share" />
                    </div>
                    <div className={styles.icons_container} onClick={handleDownloadClick}>
                        <Image width={20} height={20} src={download} alt="download" />
                    </div>
                    <div className={styles.icons_container}>
                        <Image width={20} height={20} src={flag} alt="report" />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.right}`}>
                    <GenContainer />
                </div>
            </div>
            <div>

            </div>
        </section>
        </>
    );
}