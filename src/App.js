import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
    cardDelete: true,
    nameFilter: '',
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateFields);
  };

  validateFields = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const MIN_ATTR = 0;
    const MAX_ATTR = 90;
    const TOTAL_ATTR = 210;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const isLessThenMaxValue = sumAttr <= TOTAL_ATTR;
    const verifyAttr1 = cardAttr1 >= MIN_ATTR && cardAttr1 <= MAX_ATTR;
    const verifyAttr2 = cardAttr2 >= MIN_ATTR && cardAttr2 <= MAX_ATTR;
    const verifyAttr3 = cardAttr3 >= MIN_ATTR && cardAttr3 <= MAX_ATTR;

    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && isLessThenMaxValue
    && verifyAttr1
    && verifyAttr2
    && verifyAttr3
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  verifyTrunfo = () => {
    const { cards } = this.state;
    const trunfoChecked = cards.find((card) => card.cardTrunfo === true);
    this.setState({
      hasTrunfo: trunfoChecked,
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }), this.verifyTrunfo);
  };

  removeCard = (indexToRemove) => {
    const { cards } = this.state;
    const newCards = cards.filter((_card, index) => index !== indexToRemove);
    this.setState({
      cards: newCards,
    }, this.verifyTrunfo);
  };

  filterByName = ({ target }) => {
    this.setState({
      nameFilter: target.value,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
      cardDelete,
      nameFilter,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Filters
          nameFilter={ nameFilter }
          filterByName={ this.filterByName }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          cards
            .filter((card) => (
              card.cardName.toLowerCase().includes(nameFilter.toLowerCase())
            ))
            .map((card, index) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                cardDelete={ cardDelete }
                removeCard={ () => this.removeCard(index) }
              />
            ))
        }
      </div>
    );
  }
}

export default App;
