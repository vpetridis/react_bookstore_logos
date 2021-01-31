import React from 'react'
import styles from './Search.module.css'

export default function SearchItem() {
  return (
    <div className={styles.searchItem}>
      <input type="text" name="search" id="search" placeholder="Search for books you'll love..." />
    </div>
  )
}
