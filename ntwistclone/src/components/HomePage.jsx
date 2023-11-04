import React from 'react'
import  styles from "../css/homepage.module.css"
import iconimage from "../images/home-image-icons-v6.png"
export const HomePage = () => {
  return (
    <>
    
    <div className={styles.homepage}
    >
    
    {/* left div for content and button */}
    <div className={styles.content}>
        <h1>Data-powered solutions for Industrial Excellence</h1>
        <button>Read More</button>
    </div>

    {/* right div for image */}
    <div className={styles.rightdiv}>
        <img src={iconimage}alt='iconimage'/>
    </div>
     
    </div>
    </>
  )
}
