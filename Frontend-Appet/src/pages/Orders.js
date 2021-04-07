import React, {useState} from 'react';
import {Layout, Row, Col, Button, Card, Radio, Skeleton, Divider, Input, Form, message} from 'antd';
import {EditOutlined, EllipsisOutlined, MailOutlined, SettingOutlined, DownloadOutlined} from '@ant-design/icons';
import '../styles/addservice.css'
import Routes from '../constants/routes';
import API from '../data';
import { translateMessage } from '../utils/translateMessage';
import ServicesList from '../components/ServicesList';
import {mutate} from "swr";
import { useAuth } from '../providers/Auth';
import OrdersComp from "../components/OrdersComp";
import {useOrder} from "../data/useOrder";

/**
 * Fetch Services from DB
 */
export const fetchServices = async () => {
    // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

    return await API.get('/orders');
};
/**
 * Services list page
 * @param props
 * @constructor
 */
const Orders = (props) => {
    const [ visible, setVisible ] = useState( false );
    const orders = useOrder();

    const auth = useAuth();

    console.log( 'orders', orders );

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/orders', async orders => {
                return { data: [ {}, ...orders.data ] };
            }, false );

            await mutate( '/orders' );
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
        <>
            <>
                <Row gutter={8} justify={'center'}>
                    <h1>Lista Pedidos  </h1>
                    <img src="/images/list_services.jpg" width={475} height={100}/>
                    <br></br><br></br>
                </Row>
            </>
            <>
                <Divider orientation="left"></Divider>
                <Row gutter={24} justify={'center'}>
                    <Col className="gutter-row" span={4}>
                        <h1>Fecha Orden</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Fecha de atención</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Descripción</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Estado</h1>
                    </Col>
                </Row>
                <Divider orientation="left"></Divider>
            </>
            <OrdersComp orders={ orders.orders} />
        </>
    );
};
export default Orders;

