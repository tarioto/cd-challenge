import React from 'react';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(props) {
    return (
      <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} /> <button onClick={() => props.change}>Search</button>
      </div>
    );
  }
}


export default SearchComponent;
