import React, {useEffect, useState} from 'react';
import { Button, Col, Container, Form, Row, } from "react-bootstrap";
import axios from 'axios';
import { canGoNext } from 'react-slick/lib/utils/innerSliderUtils';
// import { useState } from 'react';

const LoginPage = () => {

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('')
    useEffect(() => {
        console.log('mobile', mobile)
    })

    const onSubmit = () => {

        
          
        axios({ method: 'post',
            url: 'https://console.ezyone.in/authadmin/admin-login',
            data: {
                mobile: mobile,
                password: password
            },
            headers: {
                apikey: 'rJqPYgBb^W(Z2M_+44Cpp{XfTA{QX&',
            }  
        }).then((res) => {
            console.log(res);
            const data = res.data;
            setMessage(data.message);
            setToken(data.token)
        }).catch((err) => { 
           console.log('err', err)
           const response_data = err.response.data;
           setMessage(response_data.message);
        })
        
    }

    return (
        <>
            {/* <Container> */}



            <div className='shadow-lg'>
                <img src="https://console.ezyone.in/assets/app/logo-blue.png" height={50} width={180} m={180}
                    class="border border-5 "/>
                {/* <img src="https://scontent.fbho3-2.fna.fbcdn.net/v/t1.6435-9/117838581_173023391004342_2397247256428269740_n.png?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=MpEMz5wabX8AX_E_F7n&_nc_ht=scontent.fbho3-2.fna&oh=00_AT97tApBaPhzWbDxqW2-TYehZttrbV6MN-Vz0-TZIOEB0A&oe=62A186E5"
                    height={200} width={180} m={180}
                    class="border border-5 "
                /> */}
            </div>
            {/* <h1 className="shadow-lg text-dark  p-5 text-center rounded">Admin Login</h1> */}

            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form>
                        <h2 className='text-center'>Admin Login</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Mobile
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                Password
                                {/* {password} */}
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        <Button variant="primary btn-block" type="submit" onClick={onSubmit}>
                            Login
                        </Button>
                        <div>
                            {message} 
                        </div>
                        <div>
                            {token}
                        </div>
                    </Form>
                </Col>
            </Row>
            <div className='$indigo-800 borderwidth-1'>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 EZYONE DIGITAL SYSTEMS PRIVATE LIMITED . All Rights Reserved.</h6>
            </div>
            {/* </Container> */}
        </>
    );
};

export default LoginPage;