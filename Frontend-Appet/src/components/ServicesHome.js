import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useServicesList } from '../data/useServicesList';
import ShowError from './ShowError';

const { Text } = Typography;

const ServicesHome = ( props ) => {

        const { services, isLoading, isError, mutate } = useServicesList();

        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />
                                <Card title='' extra='' cover='' loading />
                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }

        return (

            <>

                <Row justify='center' gutter={ 30 }>
                    {
                        services.map( ( service, i ) => (
                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                { service.title
                                    ? <Card
                                        title={ service.title }

                                        cover={
                                            <img alt={ service.title }
                                                 src={ `http://localhost:8000/storage/${ service.image }` } /> }

                                    >{<Button type="primary"  href={Routes.ADV}>Más Información</Button>}

                                    </Card>
                                    : <div style={ { textAlign: 'center' } }>
                                        <Skeleton.Image style={ { width: 200 } } />
                                        <Card title='' extra='' cover='' loading />
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

export default ServicesHome;
