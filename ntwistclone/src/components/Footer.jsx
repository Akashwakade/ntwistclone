import React from 'react'
import styles from '../css/footer.module.css'
export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.innerdiv}>
        <h1>NTWIST</h1>
        <div className={styles.home}>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p></div>

        <p style={{color:"#6f7f92"}}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>

        <div><img src='https://th.bing.com/th/id/R.fb6ca24911710c6cc8355e4e1a574fc2?rik=erOGCNR4oREMXA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fLogo-Twitter.jpg&ehk=CWjaAxmMAN774TK9cjhZMOaDU96b7oh4srAScg5nOf0%3d&risl=&pid=ImgRaw&r=0'/> <img src='https://th.bing.com/th?id=OIP.FPjQ2OolWgNHEDLXkIf98AHaF2&w=281&h=222&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/></div>

        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        </div>
    </div>
  )
}
