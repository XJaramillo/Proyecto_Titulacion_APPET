import React from 'react';
import OrdersList from '../components/OrdersList';
import { useService } from '../data/useService';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';
import { useServiceOrders } from '../data/useServiceOrders';
import { Skeleton } from 'antd';

const ServicePage = () => {
  let { id } = useParams();
  const service = useService( id );
  const orders = useServiceOrders( id );

  return (
    <>
      {
        service.isLoading
          ? <div>Cargando...</div>
          : service.isError
          ? <ShowError error={ service.isError } />
          : <>
            <h1 className='title'>
              Servicio de  { service.service.title }
            </h1>
            <p>{ service.service.body }</p>

          </>
      }

      {
        orders.isLoading
          ? <Skeleton loading={ orders.isLoading } active avatar />
          : orders.isError
          ? <ShowError error={ orders.isError } />
          : service.service && <OrdersList serviceId={ id } orders={ orders } />
      }
    </>
  );

};

export default withAuth( ServicePage );
