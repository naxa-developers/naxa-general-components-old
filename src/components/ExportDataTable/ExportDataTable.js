import React from 'react'
import './exportdatatable.scss'
import PropTypes from 'prop-types'
import ExportBtn from '.'

const ExportDataTable = ({tableId,exportedfilename}) => {
    console.log(tableId);
    console.log(exportedfilename);
    return (
        <>
        <div id="table_div">
            <table id="table_id">
                <thead>
                    <tr>
                    <th>Month</th>
                    <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>January</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                    <td>February</td>
                    <td>$80</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td>Sum</td>
                    <td>$180</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <ExportBtn tableid={tableId} exportedfilename={exportedfilename}/>
        </>
    )
}

ExportDataTable.propTypes = {

}

export default ExportDataTable

