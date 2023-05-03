import Card from "@components/card";
import styles from "@styles/GifPage.module.scss";
import { useEffect, useState} from "react";
import data from "../data.mjs";
import Link from "next/link.js";
import search_icon from "@icons/search-icon.svg"
import Image from "next/image.js";

export default function GifPage() {
    const [inputValue, setInputValue] = useState("")

    const handleSearchInput= event => {
        setInputValue(event.target.value)
    }
    const dataFiltered = (inputValue === "") ? data 
    : data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
    
    useEffect(() => {
        const handleResize = () => {
            let screenWidth = window.innerWidth;
            const div = window.document.getElementById("grid");
            if (screenWidth <= 950 && screenWidth > 565) {
                div.classList.remove("grid-cols-5");
                div.classList.remove("grid-cols-1");
                div.classList.add("grid-cols-3");
            } else if (screenWidth <= 565) {
                div.classList.remove("grid-cols-5");
                div.classList.remove("grid-cols-3");
                div.classList.add("grid-cols-1");
            } else {
                div.classList.remove("grid-cols-3");
                div.classList.remove("grid-cols-1");
                div.classList.add("grid-cols-5");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div className={styles.search_container}>
                <input type="text" name="search" placeholder="Search for a GIF" id="search_input" className={styles.search_input} onChange={handleSearchInput}/>
                <Image src={search_icon} alt="search_icon" width={20} height={20} className={styles.search_icon}/>
            </div>
            <div className={styles.content}>
                <div className={"grid gap-4 grid-cols-5 grid-rows-3"} id="grid">
                    {dataFiltered.map((item) => (
                        <Link href="/detailedGif">
                            <Card item={item} />
                        </Link>
                    ))}
                </div>
            </div>
            <p>{inputValue}</p>
        </>
    );
}
