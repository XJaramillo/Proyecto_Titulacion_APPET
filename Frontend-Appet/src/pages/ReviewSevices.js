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
import ReviewServ from "../components/ReviewServ";
import {useService} from "../data/useService";

/**
 * Fetch Services from DB
 */
export const fetchServices = async () => {
    // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

    return await API.get('/services');
};
/**
 * Services list page
 * @param props
 * @constructor
 */
const ReviewServices = (props) => {
    const [ visible, setVisible ] = useState( false );
    const services = useService();

    const auth = useAuth();

    console.log( 'services', services );

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
        <>
            <>
                <Row gutter={8} justify={'center'}>
                    <h1> Servicios a Revisión </h1>
                    <br></br>
                    <br></br>
                    <img src="/images/review.jpg" width={500} height={150}/>
                    <br></br><br></br>
                </Row>
            </>
            <>
                <Divider orientation="left"></Divider>
                <Row gutter={24} justify={'center'}>
                    <Col className="gutter-row" span={4}>
                        <h1>Título del Servicio</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Ciudad</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Descripción del Servicio</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Precio</h1>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <h1>Estado</h1>
                    </Col>
                </Row>
                <Divider orientation="left"></Divider>
            </>
            <ReviewServ services={ services.service } />
        </>
    );
};
export default ReviewServices;