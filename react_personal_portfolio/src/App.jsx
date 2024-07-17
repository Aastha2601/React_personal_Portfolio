
import styles from './App.module.css'
import Ab_out from './components/About/Ab_out'
import Con_tact from './components/Contact/Con_tact'
import Exper_Ience from './components/Experience/Exper_Ience'
import He_ro from './components/Hero/He_ro'
import Nav_bar from './components/Navbar/Nav_bar'
import Pro_jects from './components/Projects/Pro_jects'


function App() {
  

  return (
    <div className={styles.App}>
      <Nav_bar/>
      <He_ro/>
      <Ab_out/>
      <Exper_Ience/>
      <Pro_jects/>
      <Con_tact/>
    </div>
  )
}

export default App
