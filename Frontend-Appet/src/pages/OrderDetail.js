import React from 'react';
import {Layout, Row, Col, Button, Popover, Divider, Space, Card, Form, Input, Checkbox} from 'antd';
import Icon, {MailOutlined} from '@ant-design/icons';
import '../styles/orderdetail.css'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const OrderDetail = () => {
    return (
        <>
            <Row className='first-part' justify='center'>
                <Col span={12}>
                    <h1>Detalle de pedido</h1>
                    <br></br>
                    <img src="/images/det.jpg" width={200} height={100}/>
                    <br></br>
                    <h2>Médico veterinario</h2>
                    <h2>Precio Consulta:</h2>
                    <h3>$20</h3>
                    <h2>Precio</h2>
                    <h3>-Esterilización</h3>
                    <h1>Enviar mensaje a Médico veterinario</h1>
                    <Form.Item name='mensaje'

                    >
                        <Input prefix={ <MailOutlined /> } placeholder='mensaje' />
                    </Form.Item>
                </Col>

            </Row>

        </>
    );
};

export default OrderDetail;