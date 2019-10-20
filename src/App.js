import React, { Component } from 'react';
import './styles/App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import UnfinishedListTable from './components/UnfinishedListTable.jsx';
import FinishedListTable from './components/FinishedListTable.jsx';



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
            <div>
                    <div className="App">
                        <p>
                            <UnfinishedListTable parentCallback = {this.callbackFunction}/>
                        </p>
                        <p>
                            <FinishedListTable dataFromParent={this.state.completedData}/>
                        </p>
                    </div>
            </div>
        );
    }
}

export default App;