import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/translateMessage';
import ServicesList from '../components/ServicesList';
import ServiceForm from '../components/ServiceForm';
import { Button, message, Skeleton, Row, Col } from 'antd';
import { useAuth } from '../providers/Auth';
import { useCategories } from '../data/useCategories';
import ShowError from '../components/ShowError';
import { mutate } from 'swr';
import Routes from "../constants/routes";

/**
 * Fetch Services from DB
 */
export const fetchServices = async() => {
  // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

  return await API.get( '/services' );
};

/**
 * Services list page
 * @param props
 * @constructor
 */
const Services = (props ) => {


  const [ visible, setVisible ] = useState( false );
  const categories = useCategories();

  const auth = useAuth();

  console.log( 'categories', categories );

  /**
   * Executed after the form is submitted
   * Fetches all the articles and refreshes the list
   * Closes the modal
   */
  const afterCreate = async() => {
    try {
      // show skeleton
      await mutate( '/services', async services => {
        return { data: [ {}, ...services.data ] };
      }, false );

      await mutate( '/services' );
      setVisible( false ); // close the modal
    } catch( error ) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      );

      message.error( translateMessage( error.message ) );
    }
  };

  return (

    <div>
      <h2 align={"center"}>Servicios de Hospedaje</h2>

      {
        <Button type="primary" href={Routes.ADDSERVICE}>Agregar Servicio</Button>
      }



      <ServicesList categories={ categories.categories } />
    </div>
  );
};


export default Services;
