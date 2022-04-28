import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods(props) {
  console.log(props);
  return (
    <div>
      <Header
        text="Foods"
      />
      <Footer />
    </div>
  );
}

export default Foods;
