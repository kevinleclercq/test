import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/yper_logo.svg';

export default function Header() {
  return (
    <header className="w-full h-[90px] fixed top-0 left-0 bg-white shadow-header">
      <Image
        src={Logo.src}
        alt="Yper logo"
        width={148}
        height={74}
        className="absolute top-2 left-1/4 sm:left-[400px]"
      />
    </header>
  );
}
