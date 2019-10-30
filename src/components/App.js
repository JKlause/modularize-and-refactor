import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import Character from './character/Character';
import List from './List';
import charArray from '../data/charArray.js';


const App = () => (
  <>
    <Header />
    <List 
      items={charArray}
      Component={Character} />
    <Footer />
  </>
);

export default App;
