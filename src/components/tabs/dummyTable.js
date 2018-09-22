import React from 'react';

//styles
import "./dummyTable.css"

const DummyTable = (props) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Dummy</th>
                    <th>table</th>
                </tr>
                <tr>
                    <td>Dummy</td>
                    <td>Table</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DummyTable