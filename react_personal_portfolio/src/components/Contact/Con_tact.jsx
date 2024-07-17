import React from 'react'
import styles from './Con_tact.module.css';
import { getImageURL } from '../../util';

const Con_tact = () => {
  return (
     <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("Contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:astha.kaushik2001@gmail.com">My E-Mail</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("Contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/aastha-kaushik-579726221/">My LinkedIn profile</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("Contact/githubIcon.png")} alt="Github Icon"/>
                <a href="https://github.com/Aastha2601">My GitHub profile</a>
            </li>
        </ul>
     </footer>
  )
}

export default Con_tact
