import React from 'react'
import styles from '../css/navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        {/* left div for logo */}
        <div className={styles.leftdiv}>
            NTWIST
        </div>
        {/* right div for other sections */}
        {/* here i want to apply multiple classname so i am using template literal */}
        <div className= {`${styles.rightdiv} ${styles.flex}`}>
              <p>Home</p>
              <p>Industries</p>
              <p>AI Software </p>
              <p>Blog</p>
              <p>Contact Us</p>
              

        </div>
    </div>
  )
}
