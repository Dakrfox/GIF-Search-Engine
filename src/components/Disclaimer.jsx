import styles from "@styles/disclaimer.module.scss"
import { useEffect, useState } from "react";

export default function Disclaimer() {
    const [remainingTime, setRemainingTime] = useState(7);

    useEffect(() => {
        const intervalId = setInterval(() => {
            
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.disclaimer_container}>
            <p className={styles.disclaimer_text}>This application is created as part of my
                portfolio and practice project. It
                is intended to showcase my skills as a
                front-end developer. Although it is
                scalable and has the potential to become
                a full-fledged product, it is currently a
                front-end only application. <br />
                </p>
                <h2>{(remainingTime>=0)&&(remainingTime)}</h2>
        </div>

    );
}