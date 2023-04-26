import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import search_icon from '@icons/search-icon.svg';




export default function Header() {
    return ( 
        <div className={styles.header} >
            <div className="logo">
                <h2>DK-GSE</h2>
            </div>
            <div className="search">
                <span className="search_icon">
                    <Image src={search_icon} width={20} height={20} alt="search"/>
                </span>
                <div className={styles.search_input}>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    );
}
