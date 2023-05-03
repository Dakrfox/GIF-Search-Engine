import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import search_icon from '@icons/search-icon.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [visibleSearch, setVisibleSearch] = useState(false);
    
	const handleSreach = () => {
		setVisibleSearch(!visibleSearch);
	}
        return ( 
        
        <div className={styles.header} >
            <div className="logo">
                <Link href={"/"}>
                    <h2 className="pointer">DK-GSE</h2>
                </Link>
            </div>
            
        </div>
    );
}
