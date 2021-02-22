import React, { Component } from 'react'
import {Table ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default class RestaurentList extends Component {

    constructor(){
        super();
        this.state={

            employee:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:8081/api/v1/employees").then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                this.setState({employee:result})
            })
        })
    }
    delete(id){
        const EMPLOYEE_URL_Update = "http://localhost:8081/api/v1/employees/" +id;
        console.log(this.state)
        const corsOptions = {
            origin: 'http://localhost:3000',
            credentials: true,
            optionSuccessStatus: 200
        }
        axios.delete(EMPLOYEE_URL_Update, this.state, corsOptions).then((res) => {

            console.warn(res);
            alert("User Deleted Successfully")
            window.location.reload(); 
        })
    }
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>Restaurent List</h1> 
                <div className="row">
                <Table className="striped bordered hover tabelcss">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                             <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email_id}</td>
                                            <td>
                                            <Link to={"/update/" + employee.id}>Edit</Link>
                                            <Button variant="primary" className="btncss" type="submit" onClick={() => { this.delete(employee.id) }}>Delete</Button>
                                            </td>
                                        </tr>
                                )
                            }


                        </tbody>



                    </Table>


                </div>
            </div>
        )
    }
}

