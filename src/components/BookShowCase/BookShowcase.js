import React from 'react'
import styles from '../../pages/CollectionsPage.module.css'
import stylesBookShowcase from './BookShowcase.module.css'
export default function BookShowcase({ selectedBook }) {
  const [id, title, imageLink] = selectedBook
  console.log(imageLink)
  return (
    <div className={styles.bookShowcaseContainer}>
      {id && title ? (
        <>
          {/* <iframe
            frameBorder="0"
            scrolling="no"
            style={{ border: '0px', width: '100%', height: '100%' }}
            src="https://books.google.gr/books?id=S85NCwAAQBAJ&lpg=PP1&dq=Stephen%20King&pg=PA8&output=embed"
          ></iframe>{' '} */}
          <h1 className={stylesBookShowcase.title}>{title}</h1>
          <img
            className={stylesBookShowcase.poster}
            src={imageLink.thumbnail}
            alt="image of the book selected"
          />
        </>
      ) : (
        <h1>Select a book</h1>
      )}
    </div>
  )
}
