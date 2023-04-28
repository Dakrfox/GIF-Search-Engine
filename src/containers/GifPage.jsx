import Card from "@components/card";
import Header from "@components/header";
import styles from "@styles/GifPage.module.scss";
import { document } from "postcss";
import { useEffect } from "react";
import data from "../data.mjs"

export default function GifPage() { 

    useEffect(() => {
        const handleResize = () => {
            let screenWidth = window.innerWidth;
            const div = window.document.getElementById('grid');
            if (screenWidth <= 950 && screenWidth > 565) {
                
                div.classList.remove('grid-cols-5');
                div.classList.remove('grid-cols-1');
                div.classList.add('grid-cols-3');
                } else if (screenWidth <= 565) {
                div.classList.remove('grid-cols-5');
                div.classList.remove('grid-cols-3');
                div.classList.add('grid-cols-1');
                } else {
                div.classList.remove('grid-cols-3');
                div.classList.remove('grid-cols-1');
                div.classList.add('grid-cols-5');
                }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>

            <div className={styles.content}>
                <div className={"grid gap-4 grid-cols-5 grid-rows-3"} id="grid">
                    { data.map(item => <Card key={item.id} item={item} />) }
                </div>
            </div>
            
        </>
    );
}
