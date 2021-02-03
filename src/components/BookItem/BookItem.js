import React, { useState, useEffect } from 'react'
import styles from './BookItem.module.css'

export default function BookItem({ id, title, subtitle, imageLinks, handleBookClick }) {
  const componentCheck = () => {
    if (title && imageLinks) {
      // console.log(title, imageLinks.thumbnail)
      return true
    }
  }

  const handleClick = () => {
    handleBookClick(id, title, imageLinks)
  }

  useEffect(() => {
    componentCheck()
  }, [])
  if (componentCheck()) {
    return (
      <div className={styles.container} onClick={handleClick}>
        <img className={styles.poster} src={imageLinks.thumbnail} alt="book poster" />
        <h1 className={styles.title}>{title}</h1> {/* {subtitle} */}
      </div>
    )
  }
  return null
}
