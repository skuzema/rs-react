import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: localStorage.getItem('searchValue') || '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillUnmount() {
        localStorage.setItem('searchValue', this.state.value);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (React.createElement("div", { className: "conatiner" },
            React.createElement("div", { className: "src-cnt" },
                React.createElement("input", { type: "text", value: this.state.value, placeholder: "Search...", onChange: this.handleChange }))));
    }
}
export default SearchBar;
