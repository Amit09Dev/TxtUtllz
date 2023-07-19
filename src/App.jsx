import {useState} from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
const [mode, setMode] = useState('dark');
const [modeText, setModeText] = useState('light')
const [alert, setAlert] = useState(null);

const showTheAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}


const toggleMode = ()=>{
  if(mode === 'dark'){
    setModeText('Dark');
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showTheAlert('Dark mode has been enabled', 'success')
    document.title = 'TextUtilz - Light Mode'
    // document.getElementById('textarea').style.backgroundColor = 'white';
    // document.getElementById('textarea').style.color = 'black';
  }
  else{
    setModeText('Light');
    setMode('dark');
    document.body.style.backgroundColor = '#212529';
    document.body.style.color = 'white';
    showTheAlert('Light mode has been enabled', 'success')
    document.title = 'TextUtilz - Dark Mode'
  }
}
  return (
    <>
    <BrowserRouter>
      <Navbar title='TexUtilz' mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path='/*' element={<TextForm heading='Enter text to analyse' alert={alert} mode={mode} showTheAlert={showTheAlert}/>}/>
        <Route path='about' element={<About mode={mode} />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
