import React from 'react'
import { getImageURL } from '../../util'
import styles from "./Ab_out.module.css"

const Ab_out = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img className={styles.aboutImage} src={getImageURL("about/aboutImage.png")} alt="Me sitting with a laptop" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in developing interactive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast and optimized back-end systems and API's</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Application Developer</h3>
              <p>Highly motivated mobile application developer with experience in android</p>
            </div>
          </li>
        </ul>
        </div>
    </section>
  )
}

export default Ab_out
