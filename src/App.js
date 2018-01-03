import React, { PureComponent } from 'react';
import _ from 'lodash';
import './App.css';
// import initPerfMeasurement from './Perf';

// initPerfMeasurement();

class ListItem extends PureComponent {
  render() {
    console.log('render ListItem')
    return <li>{this.props.name}</li>
  }
}

const getManyItems = () => 
  _(100)
    .range()
    .map(index => ({id: index, name: `item-${index}`}))  
    .value();

class App extends PureComponent {
  constructor() {
    super();
    this.state = this.updateFilteredItemIds({
      items: getManyItems(),
      filteredItemIds: null,
      searchValue: ''
    });
  }

  updateFilteredItemIds = (prevState) => ({
    ...prevState, 
    filteredItemIds: _(prevState.items)
      .filter(
        ({name}) => name.includes(prevState.searchValue)
      ) 
      .map('id')
      .value()
  })

  handleSearchChange = (event) => {
    const nextState = {...this.state, searchValue: event.target.value};
    this.setState(this.updateFilteredItemIds(nextState));
  }

  addItem = () => {
    this.setState({
      items: [
        {
          id: this.state.items.length,
          name: `item-${this.state.items.length}`
        },
        ...this.state.items
      ]
    })
  }

  render() {

    const items = this.state.items.map((item, index) => <ListItem key={item.id} name={item.name} />)

    return <div>
      <button onClick={this.addItem}>Add item</button>
      <ul>{items}</ul>
    </div>;
  }
}

export default App;
