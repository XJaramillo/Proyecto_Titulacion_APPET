import React from 'react';
import withAuth from '../hocs/withAuth';
import { Menu, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Table } from 'antd';
import { Image } from 'antd';

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

const Request = () => {


    return <>

        <Row>
            <Col flex={2}>
                <Image
                    width={200}
                    src="https://dam.ngenespanol.com/wp-content/uploads/2019/06/mirada-perros.png"
                />
                <h2>Escoge tu Servicio</h2>
                <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="HOSPEDAJE">
                        <Menu.Item key="1">Perros</Menu.Item>
                        <Menu.Item key="2">Gatos</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="VETERINARÍA">
                        <Menu.Item key="3">Perros</Menu.Item>
                        <Menu.Item key="">Gatos</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub4" icon={<AppstoreOutlined  />} title="PELUQUERÍA">

                        <Menu.Item key="11">Perros</Menu.Item>
                        <Menu.Item key="12">Gatos</Menu.Item>
                    </SubMenu>
                </Menu>,

            </Col>


            <Col flex={3}>

                <Table columns={columns} dataSource={data} onChange={onChange} />,
            </Col>
        </Row>

    </>;
};
const columns = [

    {
        title: 'Dirección',
        dataIndex: 'direction',
        sorter: {
            compare: (a, b) => a.direction - b.direction,
            multiple: 2,
        },
    },
    {
        title: 'Nombre',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 4,
        },
    },
    {
        title: 'Nº Orden',
        dataIndex: 'order',
        sortable: true,
        sorter: {
            compare: (a, b) => a.order - b.order,
            multiple: 2,
        },
    },

];

const data = [
    {
        direction: '514 Abigale Estates\n' +
            'Cummingsburgh, TX 04929',
        name: 'Aimee Bechtelar',
        order: 1,

    },

];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

export default Request;

