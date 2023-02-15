import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import providerFile from './context/contex';
import { useState } from 'react';
import Contact from './pages/Contact';


function App() {

  const [english, setEnglish ] = useState(true);
  const [ loading, setloading ] = useState(true);
  const [newSideBar, setNewSideBar] = useState(false) 

  const openSideBar = () => {
    const x =  document.querySelector('.links');
 
    if (x.style.display === 'none') {
      return x.style.display = 'block';
   } else {
    return   x.style.display = 'none';
   }
       
     }

  const contexObj = {
    english,
     setEnglish,
    loading, setloading,
    newSideBar, setNewSideBar,
    openSideBar

  }

  return (
    <providerFile.Provider value={ contexObj }>
   
    <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills /> } />
          <Route path='/contact' element={<Contact />} />
          
      </Routes>
  </providerFile.Provider>
 
  );
}

export default App;
