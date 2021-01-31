import React from 'react'
import Header from './components/Header/Header'
import CollectionsPage from './pages/CollectionsPage'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './App.module.css'
export default function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <Header />
        <SearchBar />
        <CollectionsPage />
      </div>
    </div>
  )
}
