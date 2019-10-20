import React from 'react';
import ReactDOM from 'react-dom';
import PendingListTable from '../components/PendingListTable';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PendingListTable />, div);
    ReactDOM.unmountComponentAtNode(div);
});
