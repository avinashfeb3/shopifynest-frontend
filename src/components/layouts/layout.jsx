import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';

const layout = ({children}) => {
  return (
    <div>
        <ScrollToTop/>
        <Header/>
        <main className="overflow-x-hidden">{children}</main>
        <Footer/>
    </div>
  )
}

export default layout;