import React, { useState, useEffect } from 'react'
import styles from './BookItem.module.css'

export default function BooItem({ title, description, printedPageCount, imageLinks }) {
  const componentCheck = () => {
    if (title && description && imageLinks) {
      console.log(title, description, imageLinks.thumbnail)
      return true
    }
  }

  useEffect(() => {
    componentCheck()
  }, [])
  if (componentCheck()) {
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{description}</p> <span>{printedPageCount}</span>
        <img src={imageLinks.thumbnail} alt="book poster" />
      </div>
    )
  }
  return null
}
