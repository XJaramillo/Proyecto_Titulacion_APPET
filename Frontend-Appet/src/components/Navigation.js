import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';

const linkStyle = {};

const Navigation = ( props ) => {
  let location = useLocation();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  React.useEffect( () => {
    setMenuState( {
      ...menuState,
      current: location.pathname
    } );
  }, [ location, isAuthenticated ] );

  const handleClick = ( e ) => {
    console.log( 'click ', e );
    setMenuState( {
      ...menuState,
      current: e.key
    } );
  };

  return (

      <>
        <Menu
            mode={ props.mode }
            onClick={ handleClick }
            className='menu'
            theme='dark'
            selectedKeys={ [ menuState.current ] }
            style={ {
              lineHeight: '64px',
              width: 'fit-content'
            } }
        >
          <Menu.Item key={ Routes.HOME2 }>
            <Link to={ Routes.HOME2 } style={ linkStyle }>Inicio</Link>
          </Menu.Item>

          <Menu.Item key={ Routes.HOME }>
            <Link to={ Routes.HOME } style={ linkStyle }>Servicios</Link>
          </Menu.Item>

          <Menu.Item key={ Routes.SERVICES }>
            <Link to={ Routes.SERVICES } style={ linkStyle }>Hospedaje</Link>
          </Menu.Item>

          <Menu.Item key={ Routes.HAIRSTYLE }>
            <Link to={ Routes.HAIRSTYLE } style={ linkStyle }>Peluquería</Link>
          </Menu.Item>

          <Menu.Item key={ Routes.VET }>
            <Link to={ Routes.VET } style={ linkStyle }>Veterinaria</Link>
          </Menu.Item>

          <Menu.Item key={ Routes.ABOUT }>
            <Link to={ Routes.ABOUT } style={ linkStyle }>About</Link>
          </Menu.Item>

          {
            isAuthenticated
                ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name } >
                  <Menu.Item key={ Routes.REVIEWSERVICES }>
                    <Link to={ Routes.REVIEWSERVICES } style={ linkStyle }>Revisión Solicitudes</Link>
                  </Menu.Item>
                  <Menu.Item key={ Routes.ORDERS }>
                    <Link to={ Routes.ORDERS } style={ linkStyle }>Mis Pedidos</Link>
                  </Menu.Item>
                  <Menu.ItemGroup title='Proveedores'>
                    <Menu.Item  key={ Routes.REQUEST }>
                      <Link to={ Routes.REQUEST } style={ linkStyle }>Solicitudes</Link>
                    </Menu.Item>

                    <Menu.Item key={ Routes.LISTSERVICES }>
                      <Link to={ Routes.LISTSERVICES } style={ linkStyle }>Mis Servicios</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                  <br></br>
                  <Menu.Item key={ Routes.LOGIN }>Salir
                    <Link to={ Routes.LOGOUT } className='logout-link'>
                      {
                        isCheckingAuth
                            ? <LoadingOutlined />
                            : <><LogoutOutlined /> Salir</>
                      }
                    </Link>
                  </Menu.Item>
                </Menu.SubMenu>
                : <Menu.Item key={ Routes.LOGIN }>
                  <Link to={ Routes.LOGIN }>
                    {
                      isCheckingAuth
                          ? <LoadingOutlined />
                          : <><LoginOutlined /> Ingresar</>
                    }
                  </Link>
                </Menu.Item>
          }
        </Menu>
      </>

  );
};

export default Navigation;