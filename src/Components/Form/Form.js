import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  handleCancel = () => {
    this.setState({});
  };

  handleAdd = () => {
    this.setState({});
  };

  // handleChange = e => {
  //   let {} = e.target;
  //   this.setState({});
  // };

  render() {
    return (
      <div>
        <input />
        <input />
        <input />
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
