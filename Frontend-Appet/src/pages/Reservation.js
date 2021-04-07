import React, {useState} from 'react';
import {Layout, Row, Col, Button, Popover, Divider, Space, Card, Image, Skeleton, message} from 'antd';
import '../styles/reservation.css'
import Routes from '../constants/routes';
import {LikeOutlined, HeartOutlined,CheckCircleOutlined, HomeOutlined}from "@ant-design/icons";
import {useServicesList} from "../data/useServicesList";
import ShowError from "../components/ShowError";
import API from "../data";
import {mutate} from "swr";
import {translateMessage} from "../utils/translateMessage";
import ServicesList from "../components/ServicesList";
//import { Row, Col } from 'antd';
import { Select } from 'antd';
const { Meta } = Card;
export const fetchServices = async() => {
    // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

    return await API.get( '/services' );
};

const Reservation = () => {
    const { services, isLoading, isError, mutate } = useServicesList();
    const [ visible, setVisible ] = useState( false );
    const { Option, OptGroup } = Select;

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
        }
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    if( isLoading ) {
        return <Row justify='center' gutter={ 30 }>
            {
                [ ...new Array( 9 ) ].map( ( _, i ) =>
                    <Col xs={ 24 } sm={ 5 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
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
            <Row className='first-part'>
                <Col span={24}>
                    <img src="/images/10.jpeg" />

                </Col>
            </Row>
            <Row justify='center' className='second-part'>

                <Col span={24}>
                    <br/>
                    <Row justify='center'>
                        <Col span={9}>
                            <br/>
                            <Button type="primary" >Todos los anuncios</Button>
                            <br/><br/><br/>
                            <h1>TODAS LAS CATEGORÍAS</h1><br/>
                            <>
                                <Button block="danger" block href={Routes.SERVICES}>
                                    Hospedaje
                                </Button>
                                <Button block href={Routes.HAIRSTYLE}>Peluquería</Button>
                                <Button block="danger" block href={Routes.VET}>
                                    Veterinaria
                                </Button>
                            </>
                            <br/><br/>
                            <style>
                            <h1>Precio</h1>
                            </style>


                            <Select defaultValue="Mascota" style={{ width: 200 }} onChange={handleChange}>
                                <OptGroup label="Caninos">
                                    <Option value="Perro">Perro</Option>
                                    <Option value="Perra">Perra</Option>
                                </OptGroup>
                                <OptGroup label="Felinos">
                                    <Option value="Gato">Gato</Option>
                                    <Option value="Gata">Gata</Option>
                                </OptGroup>
                            </Select>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <img src="/images/perro.png" width={250} height={200}/><br/><br/>
                            <img src="/images/cara.png" width={250} height={200}/><br/><br/>
                            <img src="/images/hotel_canino.png" width={250} height={200}/><br/><br/>
                            <img src="/images/tienda_mascotas.png" width={250} height={200}/><br/><br/>
                            <img src="/images/peluqueria_canina1.png" width={250} height={200}/><br/><br/>
                            <img src="/images/veterinaria.png" width={250} height={200}/><br/><br/>
                            <img src="/images/perro.png" width={250} height={200}/><br/><br/>
                            <img src="/images/cara.png" width={250} height={200}/><br/><br/>
                            <img src="/images/hotel_canino.png" width={250} height={200}/><br/><br/>
                            <img src="/images/tienda_mascotas.png" width={250} height={200}/><br/><br/>
                            <img src="/images/peluqueria_canina1.png" width={250} height={200}/><br/><br/>
                            <img src="/images/veterinaria.png" width={250} height={200}/><br/><br/>
                            <img src="/images/peluqueria_canina1.png" width={250} height={200}/><br/><br/>
                            <img src="/images/veterinaria.png" width={250} height={200}/><br/><br/>


                        </Col>

                        <Col span={9}>
                            <br/>
                            <Button type="primary"  >Vista Resumida</Button>
                            <br/><br/><br/>

                            <Col span={2}>
                                <br/>
                                {
                                    services.map((service, i) => (
                                        <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>

                                            {service.type
                                                ? <Card
                                                    title={service.type}

                                                    cover={
                                                        <img alt={service.type}
                                                             src={`http://localhost:8000/storage/${service.image}`}/>

                                                    }

                                                >
                                             </Card>
                                                : <div style={{textAlign: 'center'}}>
                                                    <Skeleton.Image style={{width: 200}}/>
                                                    <Card title='' extra='' cover='' loading/>
                                                </div>
                                            }
                                        </Col>
                                    ))
                                }
                           </Col>


                        </Col>
                        <Col span={6}>
                            <br/>
                            <Button type="primary" >Listar</Button>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Button type="primary"  href={Routes.ADV} >Reservar</Button>

                        </Col>
                    </Row>
                </Col>
            </Row>

            <Button type="primary"  href={Routes.ADV}>Buscar</Button>

        </>


    );
};


export default Reservation;