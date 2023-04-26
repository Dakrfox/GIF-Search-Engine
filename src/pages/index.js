import Image from 'next/image'
import GifPage from '@containers/GifPage.jsx'
import Header from '@components/header'
import styles from '@styles/main.module.scss'




export default function Home() {
  return (
    <>
      <div className={styles.Content}>
        <GifPage />
      </div>
    </>
    
  )
}
