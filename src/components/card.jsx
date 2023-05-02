import { useDispatch } from 'react-redux';
import Image from "next/image";
import styles from "@styles/card.module.scss"
import gif from "@icons/giphy.gif"
import { decrement, addingGIF } from "../slices/counterSlice.js";

export default function Card({item}) {
    const dispatch = useDispatch()
    
    return (
        <div className={styles.card} onClick={()=> dispatch(addingGIF({...item}))}>
            <div className={styles.gif}>
                <Image className={styles["gif-image"]} src={item?.link} width={250} height={250} alt="gif" />
            </div>
            <div className={styles.keywords}>
                <p><span>Keywords:</span> {item?.keywords.join(" -  ")}</p>
            </div>
        </div>
    )
} 