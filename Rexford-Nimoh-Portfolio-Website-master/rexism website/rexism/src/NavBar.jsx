/* JSX */
import React, { useState } from 'react';
import profilePic from './assets/IMG_2145-modified.png';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import jsLogo from './assets/javascript.png';
import reactLogo from './assets/react.png';
import nodeLogo from './assets/node.png';
import cppLogo from './assets/cpp.png';
import './NavBar.css';

function NavBar() {
  const [displayedCard, setDisplayedCard] = useState(null);

  return (
    <>
      <nav>
        <ul>
          <li className='About' 
              onClick={() => setDisplayedCard(displayedCard !== 'About' ? 'About' : null)}>
            About
          </li>
          <li className='Projects' 
              onClick={() => setDisplayedCard(displayedCard !== 'Projects' ? 'Projects' : null)}>
            Projects
          </li>
          <li className='Contact' 
              onClick={() => setDisplayedCard(displayedCard !== 'Contact' ? 'Contact' : null)}>
            Contact
          </li>
        </ul>
      </nav>
      {displayedCard === 'About' && (
        <div className='AboutCard'>
          {<img className = 'ProfilePic' src={profilePic} alt='Profile' /> }
          {<p className='text'>Hello, My name is <strong>Rexford Nimoh </strong>and I am a <strong>Junior Developer</strong>, Currently attending <strong>University of Texas at Dallas</strong> for <strong>Computer Science</strong></p>}
          {<p className='Line'> | </p>}
          {<p className='Skills'>Skills: </p>}
          <div className='SkillsContainer'>
         {<img className='SkillLogo' src={htmlLogo} alt='HTML' /> }
         {<img className='SkillLogo' src={cssLogo} alt='CSS' /> }
         {<img className='SkillLogo' src={jsLogo} alt='JavaScript' /> }
         {<img className='SkillLogo' src={reactLogo} alt='React' /> }
         {<img className='SkillLogo' src={nodeLogo} alt='Node.js' /> }
         {<img className='SkillLogo' src={cppLogo} alt='C++'></img>}
         {<button a href='' className='Resume'> View Resume</button >}
         </div>
        </div>
      )}
      {displayedCard === 'Projects' && (
        <div className='ProjectsCard'>
          Projects content here
        </div>
      )}
      {displayedCard === 'Contact' && (
        <div className='ContactCard'>
          Contact content here
        </div>
      )}
    </>
  );
}

export default NavBar;