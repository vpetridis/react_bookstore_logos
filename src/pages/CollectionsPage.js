import React, { useState, useEffect } from 'react'
import styles from './CollectionsPage.module.css'
import BookShowcase from '../components/BookShowCase/BookShowcase'
import BookItem from '../components/BookItem/BooItem'

export default function CollectionsPage() {
  const [books, setBooks] = useState({ isLoading: true })
  const [bookItem, setBookItem] = useState()

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
books.items.map((item=> console.log(item.selfLink)))    // setBookItem(books.selfLink)
  }, [books])

  if (books.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <div className={styles.collectionsContainer}>
        <h1>CollectionsPage</h1>
        {/* {items.books.map(({ id, selfLink }) => (
          <p key={id}>{selfLink}</p>
        ))} */}
      </div>
      <BookShowcase />
    </div>
  )
}
