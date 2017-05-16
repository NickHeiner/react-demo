import React, { PureComponent } from 'react';
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

class AddButton extends PureComponent {
  render() {
    return <button onClick={this.props.onClick}>Add item</button>
  }
}

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      items: [
        {id: 0, name: 'Apple'},
        {id: 1, name: 'Orange'},
        {id: 2, name: 'Horse'},
      ]
    }
  }

  handleAddItem = () => {
    this.setState({
      items: this.state.items.concat({
        id: 3,
        name: 'Banana'
      })
    });
  }

  render() {
    return <div>
      <List items={this.state.items} />
      <AddButton onClick={this.handleAddItem} />
    </div>;
  }
}

export default App;
