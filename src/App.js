import React, { useState, useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import CollectionsPage from './pages/CollectionsPage'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './App.module.css'

const SearchQuery = React.createContext()
export default function App() {
  const [queryString, setQueryString] = useState('')

  function handleSearch(e) {
    setQueryString(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <Header />
        <SearchBar query={queryString} handleSearch={handleSearch} />
        <CollectionsPage query={queryString} />
      </div>
    </div>
  )
}
