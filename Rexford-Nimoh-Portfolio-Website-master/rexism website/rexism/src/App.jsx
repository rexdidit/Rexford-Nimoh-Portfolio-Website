import  React, {useEffect, useState} from 'react';
import LandingPage from './LandingPage.jsx';
import NavBar from './NavBar.jsx';
import './index.css';
import Header from './Header.jsx';


function App() {
//const [showNewPage, setShowNewPage] = useState(false);
const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setFade(true);
        console.log('Fade in');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  
  return(
    <div> 
    <LandingPage />
  <Header />
  <NavBar/>
  </div>
  );
}

export default App
