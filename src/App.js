import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Products: [
        {
          price: 1999,
          title: "Mobile phone",
          qty: 5,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 2,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQty = (product) => {
    const { Products } = this.state;
    const index = Products.indexOf(product);

    Products[index].qty += 1;

    this.setState({
      Products,
    });
  };

  handleDecreaseQty = (product) => {
    const { Products } = this.state;
    const index = Products.indexOf(product);
    if (Products[index].qty === 0) {
      return;
    }
    Products[index].qty -= 1;
    this.setState({
      Products,
    });
  };

  handleDeleteProduct = (id) => {
    const { Products } = this.state;

    const items = Products.filter((item) => item.id !== id);

    this.setState({
      Products: items,
    });
  };

  getCartCount = () => {
    const {Products} = this.state;

    let count = 0;

    Products.forEach((item) => {
      count += item.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {Products} = this.state;
    let price = 0;

    Products.forEach((item) => {
       price += (item.qty * item.price);
    })

    return price;
  }

  render() {
    const {Products} = this.state;
    return (
      
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          Products = {Products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
