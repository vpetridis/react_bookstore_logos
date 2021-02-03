import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'

export default function SearchItem({ query, handleSearch }) {
  const [search, setSearch] = useState()
  const handleChange = (e) => {
    handleSearch(e)
    setSearch(query)
  }
  return (
    <div className={styles.searchItem}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for books you'll love..."
        onChange={handleChange}
        value={query}
      />
    </div>
  )
}
