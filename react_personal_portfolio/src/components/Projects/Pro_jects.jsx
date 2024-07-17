import React from 'react'
import projects from '../../data/projects.json';
import Project_Card from './Project_Card';
import styles from './Pro_jects.module.css';

const Pro_jects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project,id)=> {
                return (
                   <Project_Card key={id} project={project}/>
                );
            })}
        </div>
    </section>
  )
}

export default Pro_jects
