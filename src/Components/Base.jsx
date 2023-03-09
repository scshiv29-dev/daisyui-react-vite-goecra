import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Base({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
