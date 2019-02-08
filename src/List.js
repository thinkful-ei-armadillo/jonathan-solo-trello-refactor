import './List.css'
import React from 'react';
import Card from './Card';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      target: false
    }

}


  render() {
    return (
      <section className="List" >
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          <button onClick={ () => this.props.onAddRandomCard(this.props) }>Add Card</button>
          {this.props.cards.map((card, i) =>
            <Card key={i}
              index={i}
              title={card.title}
              content={card.content}
              onDeleteCard={this.props.onDeleteCard}
            />)}
        </div>
      </section>
    );
  };
}
  

 

export default List;
