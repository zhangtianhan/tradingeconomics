import React from 'react';

export default class DataTable extends React.Component {
    formatDate = date => {
        if (date) {
            return date.substring(0, 10);
        }
    }

    render() {
        const { data } = this.props;
        let i = 0;

        return <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Latest Value</th>
                    <th>Latest Value Date</th>
                    <th>Previous Value</th>
                    <th>Previous Value Date</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>{data ?
                data.map(item => <tr key={item.Category} className={i++ % 2 === 0 ? '' : 'odd-row'}><td>{item.Title}</td><td>{item.LatestValue}</td><td>{this.formatDate(item.LatestValueDate)}</td><td>{item.PreviousValue}</td><td>{this.formatDate(item.PreviousValueDate)}</td><td>{item.Unit}</td></tr>)
                : <tr key="nodata" className='no-data' ><td colSpan="6">Choose a country to start!</td></tr>
            }</tbody>
        </table>;
    }
}