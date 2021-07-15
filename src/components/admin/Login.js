import React from 'react';
import { Row, Col, Typography, Form, Input, Button, Checkbox } from 'antd';

import './login.css';

const { Title } = Typography;

const linkImg = 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/126227404_2869246303396446_3590482856154428289_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoiYiJ9&_nc_ohc=zwfdUVLNAfkAX91udaQ&_nc_ht=scontent-hkt1-2.xx&oh=3e54478ab7e06b1e375ef98e60234d73&oe=60F62307'

export default function Login(){
  return(
    <div className='login'>
      <Row align='center'>
        <Title level={1} type='success'>Welcome to SSV Blog admin's page</Title>
      </Row>
      <Row className='login__form'>
        <Col span={12}>
          <img src={linkImg} width='300px' height='300px' alt='SSV members'/>
        </Col>
        <Col span={12}>
          <Form
            layout='horizontal'
            name='login'
            labelCol={{span: 8}}
            wrapperCol={{ span: 16 }}
          >
            <Title level={3}>Login</Title>
            <Form.Item
              
              label='Username'
              name='username'
              rules={[{required: true, message: 'Please input your username'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              className='margin__bottom--none'
              label='Password'
              name='password'
              rules={[{required: true, message: 'Please input your password'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name='remember'
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='success' htmlType='submit'>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}