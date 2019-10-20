import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../styles/FinishedListTable.css';

//This component displays tasks that are done
class CompletedListTable extends Component {
    constructor(props) {
            super(props);
            this.onDeleteRow = this.onDeleteRow.bind(this)
        }

    onDeleteRow(rowKeys) {
    }

    render() {
            const options = {
                afterDeleteRow: this.onDeleteRow,
            };

            // To delete rows you be able to select rows
            const selectRowProp = {
                mode: 'checkbox'
            };

            return (
                <div>
                    <BootstrapTable data={this.props.dataFromParent}
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
export default CompletedListTable