import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.jsx';
import Counter from './Counter.jsx';
import FilteredList from './FilteredList.jsx';

const produceList = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Grapes', type: 'Fruit' },
  { name: 'Strawberry', type: 'Fruit' },
  { name: 'Peach', type: 'Fruit' },
  { name: 'Watermelon', type: 'Fruit' },
  { name: 'Pineapple', type: 'Fruit' },
  { name: 'Lemon', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Broccoli', type: 'Vegetable' },
  { name: 'Cucumber', type: 'Vegetable' },
  { name: 'Bell Pepper', type: 'Vegetable' },
  { name: 'Tomato', type: 'Vegetable' },
  { name: 'Spinach', type: 'Vegetable' },
  { name: 'Kale', type: 'Vegetable' },
  { name: 'Cauliflower', type: 'Vegetable' },
  { name: 'Eggplant', type: 'Vegetable' }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Counter />
        <FilteredList items={produceList} />
      </div>
    );
  }
}

export default App;
