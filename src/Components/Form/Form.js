import React from "react";
import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  handleInput = (val) => {
    this.setState({
      name: val,
      price: val,
      imgurl: val
    })
  }

  // componentDidMount() {
  //   this.addClothes();
  // }

  addClothes = () => {
    const newClothes = {
      name: this.state.inventory
    };

    axios
      .post("/api/products", newClothes)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // handleChange = e => {
  //   let {} = e.target;
  //   this.setState({});
  // };

  render() {
    // console.log(this.props.addClothes)
    return (
      <div>
        <input  />
        <input />
        <input />
        <button>Cancel</button>
        <button onClick={() => this.state.handleAdd}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
