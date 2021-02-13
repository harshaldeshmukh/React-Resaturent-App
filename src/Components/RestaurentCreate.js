import React, { Component } from 'react'
import axios from "axios";
import { Form, Button } from "react-bootstrap";


export default class RestaurentCreate extends Component {

    constructor() {
        super()
        this.state = {
            firstName: null,
            lastName: null,
            email_id: null
        }

    }
    create() {
        const EMPLOYEE_URL_ADD = "http://localhost:8081/api/v1/add"
        console.log(this.state)
        const corsOptions = {
            origin: 'http://localhost:3000',
            credentials: true,
            optionSuccessStatus: 200
        }
        //     // const requestOptions = {
        //     // method: 'POST',
        //     // headers: { 'Content-Type': 'application/json' },
        //     // body: JSON.stringify( this.state )
        // };
        //   fetch('http://localhost:8081/api/v1/add' ,{method:"Post",requestOptions}).then((res)=>{
        //         res.json().then((esult)=>{
        //             console.warn(esult);
        //         })
        //   })

        axios.post(EMPLOYEE_URL_ADD, this.state, corsOptions).then((res) => {

            console.warn(res);
            this.props.history.push("/list")
        })

    }
    render() {
        return (
            <div>
                <h1>Restaurent Create</h1>
                {/* <input onChange={(event)=>{this.setState({firstName:event.target.value})}} placeholder="First Name"/> <br></br>
                 <input onChange={(event)=>{this.setState({lastName:event.target.value})}} placeholder="Last Name"/> <br></br>
                 <input onChange={(event)=>{this.setState({email_id:event.target.value})}} placeholder=" Email Id"/> <br></br> */}
                <Form>

                    <Form.Group controlId="formBasicEmail" className="formcss">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter FirstName" onChange={(event) => { this.setState({ firstName: event.target.value }) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="formcss">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName" onChange={(event) => { this.setState({ lastName: event.target.value }) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="formcss">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(event) => { this.setState({ email_id: event.target.value }) }} />
                    </Form.Group>



                    <Button variant="primary" type="submit" onClick={() => { this.create() }}> Submit</Button>
                </Form>

                {/* <button onClick={()=>{this.create()}}>Submit</button> */}
            </div>
        )
    }
}
