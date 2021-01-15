import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import logo from '../logo-grey.jpg';

const Home = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <main>
      {/* <img src={logo} className='logo-home' alt='sachinm78' /> */}
      {/* <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button> */}
      <h2 className='h2-large'>Developer  |  Educator  |  Activist</h2>
    </main>
  );
};

export default Home;