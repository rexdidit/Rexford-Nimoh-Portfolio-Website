"use client";
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return(
    <section className="IntLogo">
      <Image
      src="../../images/Yep.svg"
      alt='Logo 2'
      width={50}
      height={50}
      />
    </section>
  );
}

export default Logo;