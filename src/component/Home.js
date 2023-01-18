import React from 'react';
import './home.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => (
  <div className="homepage">
    <h2 className="heading">Welcome to our page!</h2>
    <LoremIpsum p={2} />
  </div>
);
export default Home;
