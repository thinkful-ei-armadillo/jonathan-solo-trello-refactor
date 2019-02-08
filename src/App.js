import React from 'react';
import List from './List';
import STORE from './store';


class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }
  state = {
    store: STORE,
  }
  

  handleDeleteCard = (props) => {
    console.log('handle delete', {props});
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    })

    function omit(obj, keyToOmit) {
      return Object.entries(obj).reduce(
        (newObj, [key, value]) =>
          key === keyToOmit ? newObj : { ...newObj, [key]: value },
        {}
      );
    }
  }

  handleTarget = () => {
    this.setState({
      target: !this.state.lists.target
    })
  }

  // get target List id, add randomCard to allCards with id attached
  // add corrisponding id to target list cardIds
  handleAddRandomCard = (props) => {
    console.log('add random card', {props});
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card`,
        content: 'lorem ipsum',
      }
    }
    
  }
  

  render() {
    
    const { store } = this.state;
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list, i) => (
            <List
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleAddRandomCard}
              key={i}
              index={i}
              target={list.target}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
      
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
