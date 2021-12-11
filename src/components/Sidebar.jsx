import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';
import "../styles/Sidebar.css"

const SidebarLinks = () => {
  return (
    <div className="father">
          <ul className='mt-12'>
      <SidebarRoute to='' title='Inicio'  />
      <PrivateComponent roleList={['ADMINISTRADOR']}>
        <SidebarRoute to='/usuarios' title='Usuarios'  />
      </PrivateComponent>
      <SidebarRoute to='/proyectos' title='Proyectos'  />
      <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
        <SidebarRoute to='/inscripciones' title='Aprobacion Inscripciones' />
      </PrivateComponent>
      
      <Logout />
    </ul>
    </div>

  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to='/auth/login' className='sidebar-route text-red-700'>
        <div className='flex items-center'>
          <span className='text-sm  ml-2'> <p id="logout"> Cerrar Sesión</p></span>
        </div>
      </NavLink>
    </li>
  );
};

const Logo = () => {
  return (
    <>
    <div className="logo">

      <img src='gestion.png' alt='Logo' className='h-16' id="img"/>
      
    
    </div>
    <span className='my-2 text-xl font-bold text-center' id="title">Sistema gestión proyectos</span>
    </>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='sidebar-father'>
      {/* Sidebar starts */}
          <Logo />
          <SidebarLinks />
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-green-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-green-400'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
