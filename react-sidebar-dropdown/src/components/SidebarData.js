import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Major Coins',
        path: '/overview/majorcoins',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Alt Coins',
        path: '/overview/altcoins',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Markets',
    path: '/markets',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Asia',
        path: '/markets/asia',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Europe',
        path: '/markets/europe',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'US',
        path: '/markets/us',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Futures',
    path: '/futures',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Derivatives',
    path: '/derivatives',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Development',
    path: '/development',
    icon: <FaIcons.FaCartPlus />
  }
]