import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../constants/routes';

const NotFoundPage = () => (
  <Result
    status='404'
    title='404'
    subTitle='Pagina en desarrollo, no disponible'
    extra={ <Link to={ Routes.HOME2 }><Button type='primary'>Ir al inicio</Button></Link> }
  />
);

export default NotFoundPage;
