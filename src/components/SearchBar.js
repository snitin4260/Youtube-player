import React from "react";

class SearchBar extends React.Component {
  state = {
    query: "momina"
  };
  onInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.query);
  };
  render() {
    return (
      <div className="ui segment " style={{ marginBottom: "30px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search"> VideoSearch </label>{" "}
            <input
              id="search"
              type="text"
              placeholder="search.."
              value={this.state.query}
              onChange={this.onInputChange}
            />{" "}
          </div>{" "}
        </form>
      </div>
    );
  }
}

export default SearchBar;
