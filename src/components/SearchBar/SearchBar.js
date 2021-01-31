import React from 'react'
import SearchItem from './SearchItem'
import styles from './Search.module.css'

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <SearchItem />
    </div>
  )
}
