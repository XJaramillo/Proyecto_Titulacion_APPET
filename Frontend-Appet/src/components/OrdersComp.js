import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Divider, Switch} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useOrdersList } from '../data/useOrdersList';
import ShowError from './ShowError';
import {DollarOutlined }from '@ant-design/icons';
import {useOrder} from "../data/useOrder";

const { Text } = Typography;

const OrdersComp = ( props ) => {

        const { orders, isLoading, isError} = useOrdersList();


        const handleChangeOrder = ( e ) => {
            // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
            // e.target.value ) );
        };

        if( isLoading ) {
            return <Row justify='center' gutter={ 10 }>
                {
                    [ ...new Array( 1 ) ].map( ( _, i ) =>
                        <Col  style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }
        function onChange(checked) {
            console.log(`switch to ${checked}`);
        }
        return (

            <>
                {
                    props.orders &&
                    <Row justify='center'>
                        <Col>
                            <Radio.Group defaultValue='all' buttonStyle='solid' onChange={ handleChangeOrder()}>
                                <Radio.Button value='all'>Todas</Radio.Button> )
                                {
                                    props.orders.map( ( orders, index ) =>
                                        <Radio.Button value={ orders.id } key={ index }>{ orders.name }</Radio.Button> )
                                }
                            </Radio.Group>
                        </Col>
                    </Row>
                }

                <Row justify='center' gutter={ 10 }>
                    {
                        orders.map( ( orders, i ) => (
                            <Col style={ { marginBottom: 10 } } key={ i }>
                                { orders.type
                                    ? <>
                                        <Row gutter={24} justify={'center'}>
                                            <Col className="gutter-row" span={4}>
                                                { orders.orderDate }
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                { orders.attentionDate}
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                { orders.description}
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                <Switch defaultChecked onChange={onChange} />
                                            </Col>
                                        </Row>
                                    </>
                                    : <div style={ { textAlign: 'center' } }>
                                    </div>
                                }
                            </Col>
                        ) )
                    }
                </Row>
            </>
        );
    }
;

export default OrdersComp;
