import React from 'react';

import './SearchBar.css';

interface State {
  value: string;
}

interface Props extends React.PropsWithChildren {
  label: string;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue') || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="conatiner">
        <div className="search-bar">
          <input
            type="text"
            value={this.state.value}
            placeholder="Search..."
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
