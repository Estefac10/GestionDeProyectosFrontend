import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';
import "../styles/Sidebar.css"
import {useUser} from 'context/userContext';

const SidebarLinks = () => {
  return (
    <div className="father">
          <ul className='mt-12'>
      <SidebarRoute to='' title='Inicio'  />
      <SidebarRouteImagen to='/perfil' title='Perfil' />
      <PrivateComponent roleList={['ADMINISTRADOR']}>
        <SidebarRoute to='/usuarios' title='Usuarios'  />
      </PrivateComponent>
      <SidebarRoute to='/proyectos' title='Proyectos'  />
      <SidebarRoute to='/avances' title='Avances'  />
      <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
        <SidebarRoute to='/inscripciones' title='Inscripciones' />
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

      <img src='gestion.png' alt='Logo' className='h-10' id="img"/>
      
    
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
        <div className='px-6'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRouteImagen = ({ to, title, icon }) => {
  const { userData } = useUser();
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-indigo-500'
            : 'sidebar-route text-gray-1400 hover:text-white hover:bg-indigo-300'
        }
      >
        <div className='flex items-center'>
          {userData.foto ? (
            <img className='h-6 w-6 rounded-full' src={userData.foto} alt='foto' />
          ) : (
            <i className={icon} />
          )}
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-green-500'
            : 'sidebar-route text-gray-1400 hover:text-white hover:bg-green-300'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-1'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
