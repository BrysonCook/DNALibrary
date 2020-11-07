import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { message, Button, Collapse, Form, Input } from 'antd';
import styles1 from '../Css/collapse.css';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

export default class InputField extends Component {
    render() {
        return(
            <Form className='formStyle'>
                <Form.Item
                    label="Library Size"
                    name='seqCount'
                    rules={[{ required: true, message: 'Library Size is required' }]}
                  >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Sequence Length"
                    name='seqLen'
                    rules={[{ required: true, message: 'Sequence Length is required' }]}
                >
                    <Input  />
                </Form.Item>
                <Form.Item
                    label='Min Temp (°C)'
                    name='minTemp'
                    rules={[{ required: true, message: 'Min Temp is required' }]}
                >
                    <Input  />
                </Form.Item>
        
                <Collapse defaultActiveKey={[]} onChange={callback} expandIconPosition='right' style={styles1}>
                    <Panel header="Advanced" key="1" style={{textAlign: 'center'}}>
                        <Form.Item
                            label='Oligo (nM)'
                            name='oligoConc'
                        >
                            <Input placeholder='1' />
                        </Form.Item>
                        <Form.Item
                            label='Na Ion (mM)'
                            name='naConc'
                        >
                            <Input placeholder='100' />
                        </Form.Item>
                        <Form.Item
                            label='Mg Ion (mM)'
                            name='mgConc'
                        >
                            <Input placeholder='0' />
                        </Form.Item>
                    </Panel>
                </Collapse>
                <Form.Item>
                    <Button type='primary' htmlType='submit' block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}