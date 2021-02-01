import React, { useState, useEffect } from 'react'
import styles from './CollectionsPage.module.css'
import BookShowcase from '../components/BookShowCase/BookShowcase'
import BookItem from '../components/BookItem/BookItem'

export default function CollectionsPage() {
  const [books, setBooks] = useState({ items: [], isLoading: true })
  const [bookItem, setBookItem] = useState({ item: [], isLoading: false })

  const loadData = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=Stephen+King
      ?key=${process.env.REACT_APP_GOOGLE_BOOKAPI_KEY}`
    )
      .then((response) => response.json())
      .then(({ items }) => {
        setBooks({ items, isLoading: false })
      })

      .catch((err) => console.log(err))
  }
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (books.items) {
      // books.items.map((item) => console.log(item.selfLink))
      setBookItem({ item: books.items, isLoading: true })
    }
  }, [books])

  if (books.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <div className={styles.collectionsContainer}>
        {books.items
          ? books.items.map(({ id, volumeInfo }) => {
              return <BookItem key={id} {...volumeInfo} />
            })
          : null}
      </div>
      <BookShowcase />
    </div>
  )
}
