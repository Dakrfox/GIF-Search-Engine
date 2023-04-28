import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import search_icon from '@icons/search-icon.svg';
import { useEffect, useState } from 'react';

export default function Header() {
    const [visibleSearch, setVisibleSearch] = useState(false);
    
	const handleSreach = () => {
		setVisibleSearch(!visibleSearch);
	}
        return ( 
        
        <div className={styles.header} >
            <div className="logo">
                <h2>DK-GSE</h2>
            </div>
            <div className={styles.search}>
                {(visibleSearch) ? 
                    <div className={`${styles.search_input}`}>
                        <input type="text" placeholder="Search"/>
                        <button className={`${styles.search_button}`} onClick={handleSreach}>Go!</button>
                    </div>
                :
                <span className={`${styles.search_icon}`}>
                    <Image src={search_icon} width={30} height={30} alt="search" onClick={handleSreach}/>
                </span>}
                
            </div>
        </div>
    );
}
