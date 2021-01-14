import React from 'react';

const Sidebar = () => {
  
  return (
    <main>
        <div className='sidebar-header'>
        <button className='close-btn'>
          Close
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
    </main>
      
  );
};

export default Sidebar;