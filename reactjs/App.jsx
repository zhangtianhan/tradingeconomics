import React from 'react';
import te from 'tradingeconomics';
import SearchBar from './SearchBar.jsx';
import DataTable from './DataTable.jsx';

import './main.css';

const API_KEY = '8c50806fb7494f2:ge7s0w784wc50zx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        te.login(API_KEY);
        this.state = {
            data: ''
        }
    }

    handleSubmit = value => {
        if (value) {
            te.getIndicatorData(country = value).then(data => {
                console.log(data);
                this.setState({ data });
            });
        } else {
            this.setState({ data: '' });
        }
    }

    render() {
        return <>
            <SearchBar onSubmit={this.handleSubmit} />
            <DataTable data={this.state.data} />
        </>;
    }
}