import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Divider, Switch} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useServicesList } from '../data/useServicesList';
import ShowError from './ShowError';
import {DollarOutlined }from '@ant-design/icons';

const { Text } = Typography;

const ListServ = ( props ) => {

        const { services, isLoading, isError} = useServicesList();


        const handleChangeService = ( e ) => {
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
                    props.services &&
                    <Row justify='center'>
                        <Col>
                            <Radio.Group defaultValue='all' buttonStyle='solid' onChange={ handleChangeService()}>
                                <Radio.Button value='all'>Todas</Radio.Button> )
                                {
                                    props.services.map( ( services, index ) =>
                                        <Radio.Button value={ services.id } key={ index }>{ services.name }</Radio.Button> )
                                }
                            </Radio.Group>
                        </Col>
                    </Row>
                }

                <Row justify='center' gutter={ 10 }>
                    {
                        services.map( ( service, i ) => (
                            <Col style={ { marginBottom: 10 } } key={ i }>
                                { service.type
                                    ? <>
                                        <Row gutter={24} justify={'center'}>
                                            <Col className="gutter-row" span={4}>
                                                { service.title }
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                { service.type }
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                { service.description}
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                <DollarOutlined /> { service.price }
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

export default ListServ;
