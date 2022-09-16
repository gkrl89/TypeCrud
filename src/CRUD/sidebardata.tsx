import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
     },
    {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
       icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Employee',
        path: '/team/formikaddform',
        icon: <AiIcons.AiOutlineUserAdd />
      },
      {
        title: 'Employee Dashboard',
        path: '/team/dashboard',
        icon:<IoIcons.IoMdPeople />,
      }
    ]
  },
    {
    title: 'Support',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'FAQ',
        path: '/support/faq',
        icon: <FaIcons.FaQuestion />
      },
      {
        title: 'Contact',
        icon:<AiIcons.AiOutlineContacts />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNavMenus:[
            {
                title: 'Email',
                path: '/support/contact/email',
                icon: <AiIcons.AiOutlineMail />
              },
              {
                title: 'Address',
                path: '/support/contact/add',
                icon: <FaIcons.FaAddressBook />
              },

        ]
      }
    ]
  }
];