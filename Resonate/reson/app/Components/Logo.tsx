"use client";
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return(
    <section className="Logo">
      <div className="logo-container">
      <div className='glassmorphism'>
    <Image 
    src="../../images/Yep.svg" 
    alt='Yep Logo' 
    width={20} 
    height={20} 
    />
    </div>
      </div>
    </section>
  );
}

export default Logo;