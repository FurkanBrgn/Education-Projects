import React from 'react'
import styles from './styles.module.css'

const SmootButton = ({ type,text }) => {
  return (
    <button className={styles[type]}>{text}</button>
  );
}

export default SmootButton;
