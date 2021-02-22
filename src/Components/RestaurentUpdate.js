import React, { Component } from 'react'
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default class RestaurentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: this.props.match.params.id,
            firstName: null,
            lastName: null,
            email_id: null
        }

        //alert(this.props)
        console.log(props)

    }

    update() {
        const EMPLOYEE_URL_Update = "http://localhost:8081/api/v1/employees/" + this.props.match.params.id;
        console.log(this.state)
        const corsOptions = {
            origin: 'http://localhost:3000',
            credentials: true,
            optionSuccessStatus: 200
        }
        axios.put(EMPLOYEE_URL_Update, this.state, corsOptions).then((res) => {

            console.warn(res);
            alert("User Updated")
            this.props.history.push("/list")
        })
    }
    render() {
       // console.warn("sdf" + this.props.match.params.id);
        return (
            <div>
                <h1>Restaurent Update </h1>

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



                    <Button variant="primary" type="submit" onClick={() => { this.update() }}>Update</Button>
                </Form>
            </div>
        )
    }
}
