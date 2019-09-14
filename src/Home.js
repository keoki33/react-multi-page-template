import React, { Component } from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import increment from "./actions";

class Home extends Component {
  state = {};
  // const counterReducer = useSelector(state => state.counterReducer);
  whatever = () => {};

  test = () => {};

  render() {
    return (
      <div className="home">
        <h1>Home {this.test()}</h1>
        <button>+</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Home;
