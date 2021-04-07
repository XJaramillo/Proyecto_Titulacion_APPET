import React from 'react';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card, Image} from 'antd';
import '../styles/inicio.css'
import Routes from '../constants/routes';
import {LikeOutlined, HeartOutlined,CheckCircleOutlined, HomeOutlined}from "@ant-design/icons";
const { Meta } = Card;

const AboutPage = () => {

    return (
        <>
            <Row className='first-part'>

                <Col span={24}>
                    <img src="/images/2.jpeg" />

                    <h2 >Deja a tu hijo peludo con un anfitrión
                        que lo cuida como si fuera de la familia.
                    </h2>

                    <h3> Nuestro servicio está ubicado dentro del perímetro
                        urbano de la ciudad, ofreciendo a nuestros clientes
                        perrunos adecuadas y funcionales áreas para su cuidado
                        y distracción, contando con personal calificado para el cuidado de sus mascotas.
                        Appet es un sueño hecho realidad..!!</h3>

                </Col>
            </Row>
            <Row justify='center' className='second-part'>

                <Col span={24}>

                    <Button type="primary"  href={Routes.RESERVATION}>Reserva ahora</Button>
                    <br/>
                    <Row justify='center'>
                        <Col span={6}>
                            <br/>
                            <Image
                                width={200}
                                height={130}
                                src="/images/1.jpeg"
                            />
                            <Meta title="Cuidado" /> <LikeOutlined/>
                            <br/>
                        </Col>

                        <Col span={6}>
                            <br/>
                            <Image
                                width={200}
                                height={130}
                                src="/images/7.jpeg"
                            />
                            <Meta title="Cariño"  /> <HeartOutlined />
                            <br/>
                        </Col>
                        <Col span={6}>
                            <br/>
                            <Image
                                width={200}
                                height={130}
                                src="/images/3.jpeg"
                            />
                            <Meta title="Seguridad"  /> <CheckCircleOutlined />
                            <br/>
                        </Col>
                        <Col span={6}>
                            <br/>
                            <Image
                                width={200}
                                height={130}
                                src="/images/4.jpeg"
                            />
                            <Meta title="Areas Amplias" /><HomeOutlined />
                            <br/>
                        </Col>

                    </Row>
                </Col>
            </Row>

        </>
    );
};


export default AboutPage;