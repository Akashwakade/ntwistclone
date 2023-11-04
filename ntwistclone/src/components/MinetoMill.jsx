import React from 'react'
import styles from "../css/minetomill.module.css"
import { Image } from './Image'
export const MinetoMill = ({ title, text, buttonText,src }) => {
  return (
     

        <div className={styles.leftdiv}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button >{buttonText}</button></div>
   



 )
}
