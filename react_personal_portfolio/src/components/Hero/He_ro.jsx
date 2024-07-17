import React from 'react'
import { getImageURL } from '../../util'
import styles from './He_ro.module.css'

const He_ro = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, my name is Aastha Kaushik</h1>
            <p className={styles.description}>I'am a web developer with a good knowledge of React.JS, Node.JS and MySQL.Contact me if you want to know more about me.</p>
            <a className={styles.contact} href="mailto:astha.kaushik2001@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageURL("Hero/heroImage.png")} alt="Hero img of me" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        
    </section>
  )
}

export default He_ro
