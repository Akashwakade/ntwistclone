import React from 'react'
import styles from '../css/image.module.css'
export const Image = ({src}) => {
  return (
    <img className={styles.rightdiv} src={src} alt='image' />
  )
}
