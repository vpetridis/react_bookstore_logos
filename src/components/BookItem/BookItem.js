import React, { useState, useEffect } from 'react'
import styles from './BookItem.module.css'
import { Textfit } from 'react-textfit'

export default function BookItem({ title, subtitle, imageLinks }) {
  const componentCheck = () => {
    if (title && imageLinks && subtitle) {
      // console.log(title, imageLinks.thumbnail)
      return true
    }
  }

  useEffect(() => {
    componentCheck()
  }, [])
  if (componentCheck()) {
    return (
      <div className={styles.container}>
        <img className={styles.poster} src={imageLinks.thumbnail} alt="book poster" />
        <h1 className={styles.title}>{title}</h1> {/* {subtitle} */}
        
      </div>
    )
  }
  return null
}
