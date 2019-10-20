import React from 'react';
import ReactDOM from 'react-dom';
import CompletedListTable from '../components/CompletedListTable';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompletedListTable />, div);
    ReactDOM.unmountComponentAtNode(div);
});
