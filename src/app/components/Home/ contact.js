'use client';

import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const AppContact = () => {
    const onFinish = useCallback((values) => {
        console.log('Received values:', values);
    }, []);

    return (
        <div id="contact" className="block contactBlock">
            <div className="container--fluid">
                <div className="titleHolder">
                    <h2>Contact Us</h2>
                </div>
                <Form
                    name="contact_form"
                    className="contact-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your full name' }]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email', type: 'email' }]}
                    >
                        <Input placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item name="telephone">
                        <Input placeholder="Phone Number" />
                    </Form.Item>
                    <Form.Item name="subject">
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item name="message">
                        <TextArea placeholder="Message" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="contact-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AppContact;
