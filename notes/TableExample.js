// need top line for both class and simple components
import React, {Component} from 'react'

/* Custom Created Class Component */

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ashley</td>
                        <td>Artist</td>
                    </tr>
                    <tr>
                        <td>Collin</td>
                        <td>Scientist</td>
                    </tr>
                    <tr>
                        <td>Becky</td>
                        <td>Judge</td>
                    </tr>
                    <tr>
                        <td>Xander</td>
                        <td>Professional Skateboarder</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table

/* SIMPLE COMPONENT EXAMPLE

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Janet</td>
                <td>Barista</td>
            </tr>
            <tr>
                <td>Gary</td>
                <td>Truck Driver</td>
            </tr>
            <tr>
                <td>Gladys</td>
                <td>Housekeeper</td>
            </tr>
            <tr>
                <td>Robert</td>
                <td>Business Owner</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table
*/