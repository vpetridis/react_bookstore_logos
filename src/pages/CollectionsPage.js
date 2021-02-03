import React, { useState, useEffect, useContext } from 'react'
import styles from './CollectionsPage.module.css'
import BookShowcase from '../components/BookShowCase/BookShowcase'
import BookItem from '../components/BookItem/BookItem'

export default function CollectionsPage({ query }) {
  const [books, setBooks] = useState({ items: [], isLoading: true })
  const [bookItem, setBookItem] = useState({ item: [], isLoading: false })

  const loadData = () => {
    fetch(`${process.env.REACT_APP_GOOGLE_BOOKAPI_URL}${query}`)
      .then((response) => {
        console.log('response', response)
        return response.json()
      })
      .then(({ items }) => {
        console.log('fetch: ', items)
        setBooks({ items, isLoading: false })
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    loadData()
  }, [query])

  useEffect(() => {
    if (books.items) {
      setBookItem({ item: books.items, isLoading: true })
      console.log('books items is: ', books.items)
    }
  }, [books])

  if (books.isLoading) {
    return <h1>Loading...</h1>
  }
  if (!query) {
    return <h1>Let's read something today...'</h1>
  }
  return (
    <div className={styles.container}>
      <div className={styles.collectionsContainer}>
        {books.items ? (
          books.items.map(({ id, volumeInfo }) => {
            return <BookItem key={id} {...volumeInfo} />
          })
        ) : (
          <h1>Still loading...</h1>
        )}
      </div>
      <BookShowcase />
    </div>
  )
}
