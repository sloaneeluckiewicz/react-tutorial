// need top line for both class and simple components
import React, {Component} from 'react'

/* Custom Created Class Component

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

export default Table */

/* SIMPLE COMPONENT EXAMPLE */

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

//adding data through props
// line 62-64: adding button for removeCharacter prop
// the onClick function must pass throughh a function that returns the removeCharacter() method
// or else it will try to run automatically
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const {characterData, removeCharacter} = props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
        console.log(removeCharacter);
    }

export default Table;