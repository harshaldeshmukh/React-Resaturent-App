import React, { Component } from 'react'
import {Table} from "react-bootstrap";

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

