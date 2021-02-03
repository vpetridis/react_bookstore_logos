import React, { useState, useEffect, useContext } from 'react'
import { Query } from '../contexts/QueryContext'
import styles from './CollectionsPage.module.css'
import BookShowcase from '../components/BookShowCase/BookShowcase'
import BookItem from '../components/BookItem/BookItem'

export default function CollectionsPage() {
  const msg = useContext(Query)
  const [books, setBooks] = useState({ items: [], isLoading: true })
  const [bookItem, setBookItem] = useState({ item: [], isLoading: false })

  const loadData = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=Love`)
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
  }, [])

  useEffect(() => {
    if (books.items) {
      // books.items.map((item) => console.log(item.selfLink))
      setBookItem({ item: books.items, isLoading: true })
      console.log('books items is: ', books.items)
    }
  }, [books])

  if (books.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <div className={styles.collectionsContainer}>
        <h1>{msg}</h1>
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
