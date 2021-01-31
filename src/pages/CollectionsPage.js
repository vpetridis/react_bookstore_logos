import React from 'react'
import styles from './CollectionsPage.module.css'
import BookShowcase from '../components/BookShowCase/BookShowcase'

export default function CollectionsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.collectionsContainer}>
        <h1>CollectionsPage</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nam iste. Sapiente
          similique laborum exercitationem laudantium, consectetur voluptatem repudiandae
          reprehenderit totam est! Doloremque praesentium ut minima molestias eos excepturi
          eveniet.Sunt amet corporis, magni rem doloribus quis quaerat deleniti voluptatibus
          consequuntur blanditiis numquam tempora libero possimus ab reprehenderit odio esse laborum
          assumenda nihil provident suscipit voluptatem a! Optio, ea recusandae.
        </p>
      </div>
      <BookShowcase />
    </div>
  )
}
