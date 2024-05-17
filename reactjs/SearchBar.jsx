import React from 'react';

let country = ''

export default class SearchBar extends React.Component {
    handleChange = e => {
        country = e.target.value;
    }

    render() {
        return <form>
            <select name="country" onChange={this.handleChange}>
                <option value="">--Please choose a country--</option>
                <option value="mexico">Mexico</option>
                <option value="new zealand">New Zealand</option>
                <option value="sweden">Sweden</option>
                <option value="thailand">Thailand</option>
            </select>
            <input type="button" value="Submit" onClick={() => this.props.onSubmit(country)} />
        </form>;
    }
}