import React from 'react';

import './SearchBar.css';

interface Props {
  name: string;
}

interface State {
  value: string;
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
        <div className="src-cnt">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
