import { Outlet } from 'react-router-dom';

// CSS MODULE
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet /> {/* Indica o local do conteúdo da pagina */}
    </div>
  )
}

export default App
