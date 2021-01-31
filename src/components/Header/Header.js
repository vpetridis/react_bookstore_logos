import React from 'react'
import TopIcon from './TopIcon'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Logos</h1>
      <h1 className={styles.title}>love > books</h1>
      <div className={styles.iconsContainer}>
        <div className={styles.icon}>
          <i className="far fa-user"></i>
        </div>
        <div className={styles.icon}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  )
}
