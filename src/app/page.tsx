"use client"

import TextFalling from '@/components/TextFalling/indext'
import styles from './page.module.css'

export default function Home() {
  return (
   <div className={styles.container}>
        <TextFalling />
      <video autoPlay loop muted style={{ width: '100%', height: '100vh' }}>
        <source src='/formici-welcoming-web.mp4' type='video/mp4' />
        </video>
   </div>
  )
}
