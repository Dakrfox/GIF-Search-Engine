import styles from "@styles/container.module.scss"
import { useSelector } from "react-redux";


export default function GenContainer(){
    const gif = useSelector(state => state.counter)
    return(
        <div className={styles.container}>
            <p><span>ID: </span> {gif.id}</p>
            <p><span>NAME: </span> {gif.name}</p>
            <p><span>IMAGE: </span> <a href={gif.link}>{gif.link}</a></p>
            <p><span>KEYWORDS: </span> {gif.keywords.join(" - ")}</p>
            <p><span>STATUS: </span> {
                (gif.status)?"Active" : "Inactive"}
            </p>
        </div>
    );
    
}