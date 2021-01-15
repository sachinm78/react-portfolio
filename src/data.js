import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaFolderOpen,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 1,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: '#',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: '#',
    icon: <FaGithub/>,
  },
  {
    id: 3,
    url: '/',
    icon: <FaWpforms />,
  },
];
