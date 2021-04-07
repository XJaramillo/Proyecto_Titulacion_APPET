import { Comment, List, Tooltip, Form, Input, Button, Avatar, message, Skeleton } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import { useServiceOrders } from '../data/useServiceOrders';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import {useServicesList} from "../data/useServicesList";


const { TextArea } = Input;

const OrdersList = ( { orders, serviceId } ) => {

  console.log( 'props', orders );
  const [ submitting, setSubmitting ] = useState( false );

  const handleSubmit = async( values ) => {
    console.log( 'values', values );
    setSubmitting( true );

    try {

      // setValue( '' );
      orders.mutate( {
        data: [
          {}, // to show the skeleton for new comment
          ...orders.orders,
        ]
      }, false );
      await API.post( `/services/${ serviceId }/orders`, {
        text: values.text,
        service_id: serviceId
      } );
      orders.mutate(); // get updated data
      setSubmitting( false );
    } catch( error ) {
      console.log( 'error', error );
      setSubmitting( false );
      const errorList = error.response.error_list && <ErrorList errors={ error.response.error_list } />;

      message.error( <>
        { translateMessage( error.message ) }
        { errorList }
      </> );
    }
  };

  const Editor = ( { onSubmit, submitting } ) => {
    const [ form ] = Form.useForm();

    return (
        <Form
            form={ form }
            name='form_order'
            onFinish={ handleSubmit }>
          <Form.Item name='text'
                     rules={ [
                       {
                         required: true,
                         message: 'Ingresa el texto de tu comentario'
                       }
                     ] }>
            <TextArea rows={ 4 } />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' loading={ submitting } type='primary'>
              Realizar Pedido
            </Button>
          </Form.Item>
        </Form>
    );
  };

  return (
      <>
        <Comment
            avatar={ <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' alt='Han Solo' /> }
            content={ <Editor onSubmit={ handleSubmit } submitting={ submitting } /> }
        />

        <List
            className='order-list'
            header={ `${ orders.orders && orders.orders.length } ordenes` }
            itemLayout='horizontal'
            dataSource={ processOrdersData( orders.orders ) }
            renderItem={ ( item ) => {
              if( item.user ) {
                return (
                    <Comment
                        // actions={ item.actions }
                        orderDate={item.orderDate}
                        attentionDate={item.attentionDate}
                        description={item.description}
                        news={item.news}
                        user={item.user}
                        created_at={item.created_at}
                        updated_at={item.updated_at}
                    />
                );
              } else {
                return <Skeleton loading={ true } active avatar />;
              }
            } }
        />
      </>
  );
};

export default OrdersList;

const processOrdersData = ( orders ) => {
  return orders.map( ( order ) => {
    console.log( 'order', order );
    if( order.text ) {
      return ({
        // actions: [ <span key='comment-list-reply-to-0'>Reply to</span> ],
        author: <Link to={ Routes.USERS_ID }>{ order.user_data.name }</Link>,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p>{ order.description }</p>,
        datetime: <Tooltip title={ moment( order.created_at ).format( 'YYYY-MM-DD HH:mm:ss' ) }>
          <span>{ moment( order.created_at ).fromNow() }</span>
        </Tooltip>,
      });
    } else {
      return {};
    }
  } );
};