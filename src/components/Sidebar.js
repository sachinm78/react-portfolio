import React from 'react';
import logo from '../logo.png';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='sachinm78' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
            <li>
              Link 1
            </li>
            <li>
              Link 2
            </li>
            <li>
              Link 3
            </li>
      </ul>
      <ul className='social-icons'>
            <li>
              LinkedIn
            </li>
            <li>
              Github
            </li>
            <li>
              Resume
            </li>
            </ul>
    </aside>
  );
};

export default Sidebar;