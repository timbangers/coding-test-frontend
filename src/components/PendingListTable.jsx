import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../styles/UnfinishedListTable.css';

const unfinishedData = [
    {taskId: 1, taskName: 'Create a unit test for this method'},
    {taskId: 2, taskName: 'Create a wiki'},
    {taskId: 3, taskName: 'Demo to the client'},
];

//This component displays tasks that are in progress
class PendingListTable extends Component {

    constructor(props) {
        super(props);
        this.onDeleteRow = this.onDeleteRow.bind(this);
        this.onInsertRow = this.onInsertRow.bind(this);
        this.customConfirm = this.customConfirm.bind(this);

        props.data = unfinishedData;
    }

    onInsertRow(row) {
        let newRowStr = '';
        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n'
        }
    };

    onDeleteRow(rows, row) {
        row.forEach(function(item){
            console.log('taskId: ' + item.taskId);
            console.log('taskName: ' + item.taskName);
        });
        this.props.parentCallback(row);
    };

    customConfirm(next, dropRowKeys) {
        alert ('Are you sure you want to complete this task?');
        next();
    };

    render() {
        const options = {
            afterInsertRow: this.onInsertRow,
            afterDeleteRow: this.onDeleteRow,
            deleteText: 'Complete',
            handleConfirmDeleteRow: this.customConfirm

        };

        const selectRowProp = {
            mode: 'checkbox'
        };

        return (
            <div>
                <BootstrapTable data={this.props.data}
                                insertRow={true}
                                deleteRow={true}
                                selectRow={selectRowProp}
                                options={options}>
                    <TableHeaderColumn isKey dataField='taskId'>Task ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='taskName'>Task Name</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
export default PendingListTable