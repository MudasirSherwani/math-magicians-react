import React from 'react';
import './Home.css';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
const Home = () => (
  <div className="homepage">
    <h2 className="heading">Welcome to our page!</h2>
    <LoremIpsum p={2} />
  </div>
);
export default Home;
