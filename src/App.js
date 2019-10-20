import React, { Component } from 'react';
import './styles/App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import PendingListTable from './components/PendingListTable.jsx';
import CompletedListTable from './components/CompletedListTable.jsx';



class App extends Component {
    state = { completedData : [
            {taskId: 1, taskName: 'Setup local environment'},
            {taskId: 2, taskName: 'Download IDE'},
        ]};

    callbackFunction = (childData) => {
        console.log (childData);

        this.setState({completedData: [...this.state.completedData, ...childData] })
    };

    render(){
        return (
            <div className="App">
                    <PendingListTable parentCallback = {this.callbackFunction}/>
                    <CompletedListTable dataFromParent={this.state.completedData}/>
             </div>
        );
    }
}

export default App;