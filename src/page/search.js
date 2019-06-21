import React from 'react'

import { SearchBar} from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '陈钰琪',
  };
  onChange= (value) => {
    this.setState({ value });
    
  };
  render() {
    return (<div>
      <SearchBar placeholder="Search" maxLength={8}   value={this.state.value}  onChange={this.onChange} />
    </div>);
  }
}

export default SearchBarExample