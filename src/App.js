import React, { useState, useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import CollectionsPage from './pages/CollectionsPage'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './App.module.css'

const SearchQuery = React.createContext()
export default function App() {
  const [queryString, setQueryString] = useState('')
  const [bookShowcaseID, setBookShowcaseID] = useState('')
  const [selectedBook, setSelectedBook] = useState([])

  function handleSearch(e) {
    setQueryString(e.target.value)
  }
  function handleBookClick(...e) {
    const [id, title, imageLink] = e
    setSelectedBook(e)
    console.log('book with id: ', id)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <Header />
        <SearchBar query={queryString} handleSearch={handleSearch} />
        <CollectionsPage
          selectedBook={selectedBook}
          query={queryString}
          handleBookClick={handleBookClick}
        />
      </div>
    </div>
  )
}
