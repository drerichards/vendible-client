import React, {Component} from 'react'
import './css/Departments.css'

export default class Departments extends Component {
    render() {
        const deptNames = ['Apparel', 'Electronics', 'Homegoods']
        const depts = deptNames.map((dept, index) => <li key={index}>{dept}</li>)

        return (
            <div className="container bodyContainer deptContainer">
                <h1>Departments</h1>
                <ul>
                    {depts}
                </ul>
            </div>
        )
    }
}