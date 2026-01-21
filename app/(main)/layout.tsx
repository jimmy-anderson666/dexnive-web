import React from 'react'
import Navbar from './_components/ui/navbar';
import Footer from './_components/ui/footer';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
         <Navbar />
      {children}
      <Footer/>
    </div>
  )
}

export default layout