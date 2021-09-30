import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* 
       You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = 
    {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
             ]
    };
  }

    addingThings = (things, quantity) => {
      return () => {
        const findings = this.state.items.findIndex((e) => {
          if(e.value === things) 
          {
            return true;
          }
          else
          {
            return false;
          }
        });

        //checks array for existence of item
        if(findings != -1) 
        {
          let cart = [...this.state.items];
          cart[findings].qty += quantity;
          this.setState({items: cart});

        } 
        //if item doesn't already exist it is added here
        else 
        {
          this.setState
          ({
            items:
            [...this.state.items, { id: this.state.items.length + 1, value: things, qty: quantity, unit: 'x'}]
          });
        }
      }
    }
  
    render()
    {
      const {applicationDescription, applicationName} = this.props;
      return <div className={styles.shoppingList}>
        <Title 
          applicationDescription={applicationDescription}
          applicationName={applicationName}
        />
        <ShoppingList items={ this.state.items } />
        <button onClick={this.addingThings("Carrot", Math.floor(Math.random()*10)+1)}>Carrots</button> 
        <button onClick={this.addingThings("Strawberres", Math.floor(Math.random()*10)+1)}>Strawberry</button>
        <button onClick={this.addingThings("Yoghurt", Math.floor(Math.random()*10)+1)}>Yoghurt</button>
        <button onClick={this.addingThings("Beer", Math.floor(Math.random()*10)+1)}>Beer</button>

      </div>
    }
}

export default App;
