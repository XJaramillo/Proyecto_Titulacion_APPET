import React from 'react';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card } from 'antd';
import '../styles/about.css'
import { Link, useLocation } from 'react-router-dom';
import {
    BookOutlined, CopyOutlined, LoginOutlined, QuestionCircleOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import Routes from '../constants/routes';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const About = () => {

    return (
        <>
            <Row className='second-part'>
                <Col span={24}>
                    <h1 >Quienes Somos</h1>
                    <Card title=" " >
                        <div >
                            <img width={150} height={150} src="/images/quedate.png" />
                        </div>
                        <br/>

                        <br/>
                    </Card>

                    <h3>¡Amamos los perros!
                        </h3>
                    <h3>
                        Sabemos cuales son las necesidades de tu perro.
                        Socializar, compartir, jugar, correr y nadar…
                        Todo nuestro trabajo apunta a la tenencia
                        responsable, queremos que tu perro no sea
                        una carga y por eso creemos en las mascotas
                        civilizadas. La educación es importante y en
                        nuestros módulos trabajamos en la comunicación
                        para crear vínculos especiales humano-perro.
                        Por último, añoramos que tu perro sea feliz y
                        que siempre esté relajado en nuestras instalaciones.
                        Te esperamos…
                    </h3>
                </Col>
            </Row>
            <Row justify='center' className='second-part'>
                <h1 >Equipo de Trabajo</h1>
            </Row>
            <Row justify='center' className='second-part'>
                <table className="team">
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <Card title="Jessy" >
                            <div >
                                <img width={150} height={150} src="/images/jeka.jpeg" />
                            </div>
                        </Card>
                        <td></td>
                    <td>
                        <Card title="Gabo" >
                        <div >
                            <img width={150} height={150} src="/images/gabo.jpeg" />
                        </div>
                    </Card>
                    </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td>
                        <Card title="Samy" >
                            <div >
                                <img width={150} height={150} src="/images/samy.jpeg" />
                            </div>
                        </Card>
                    </td>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <Card title="Ahilton" >
                            <div >
                                <img width={150} height={150} src="/images/ahilton.jpeg" />
                            </div>
                        </Card>
                        <td>

                        </td>
                        <td>
                            <Card title="David" >
                                <div >
                                    <img width={150} height={150} src="/images/davo.jpeg" />
                                </div>
                            </Card>
                        </td>
                    </tr>
                </table>
                <Row className='second-part'>
                    <Col span={24}>
                        <h1 >Misión</h1>
                        <h3>
                            La  misión  de “Appet”,  es ser reconocidos por nuestro excelencia de servicio,
                            nuestra pasión y dedicación por los altos estándares de cuido, el respeto por
                            las mascotas en especial la raza Canina, el compromiso para crear oportunidades
                            de cuido para la mascota querida del hogar, donde sus necesidades básicas,  de
                            salud, alimentación, higiene, y más esté cubiertas,   en ausencia de sus amos.

                        </h3>
                    </Col>
                    <Col span={24}>
                        <h1 >Visión</h1>
                        <h3>
                            Ser caracterizados por la calidad y excelencia en los servicios brindados,
                            y  el profesionalismo demostrado por sus funcionarios; fomentando a los
                            clientes requerir de nuestros servicios.

                        </h3>
                    </Col>
                </Row>



            </Row>


        </>
    );
};


export default About;