import React, { PureComponent } from 'react';
import _ from 'lodash';
import './App.css';

class ListItem extends PureComponent {
  render() {
    console.log('ListItemRender', this.props);
    return <li>{this.props.name}</li>
  }
}

class List extends PureComponent {
  render() {
    const {items} = this.props;
    return <ul>
        {
          items.map(item => <ListItem key={item.id} name={item.name} />)
        }
      </ul>;
  }
}

class SearchBox extends PureComponent {
  render() {
    return <input type="text" value={this.props.value} onChange={this.props.onChange} />;
  }
}

class App extends PureComponent {
  constructor() {
    super();
    this.state = this.updateFilteredItemIds({
      items: [
        {id: 0, name: 'Apple'},
        {id: 1, name: 'Orange'},
        {id: 2, name: 'Horse'},
      ],
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

  render() {
    return <div>
      <List items={_.map(this.state.filteredItemIds, id => this.state.items[id])} />
      <SearchBox value={this.state.searchValue} onChange={this.handleSearchChange} />
    </div>;
  }
}

export default App;
