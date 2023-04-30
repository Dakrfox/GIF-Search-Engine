import styles from "@styles/container.module.scss"

export default function GenContainer(){
    return(
        <div className={styles.container}>
            <p><span>ID: </span> 1</p>
            <p><span>NAME: </span>2</p>
            <p><span>URL: </span>3</p>
            <p><span>KEYWORDS: </span>4</p>
            <p><span>STATUS: </span>5</p>
        </div>
    );
    
}