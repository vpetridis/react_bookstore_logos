import React, { useContext } from 'react'
import Header from './components/Header/Header'
import CollectionsPage from './pages/CollectionsPage'
import SearchBar from './components/SearchBar/SearchBar'
import { Query } from './contexts/QueryContext'
import styles from './App.module.css'

const SearchQuery = React.createContext()
export default function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <Header />
        <Query.Provider value='hi from provider'>
          <SearchBar />
          <CollectionsPage />
        </Query.Provider>
      </div>
    </div>
  )
}
