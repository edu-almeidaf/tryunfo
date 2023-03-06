import React from 'react';
import Card from './components/Card';
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
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateFields);
  };

  // validateFields = () => {
  //   const { title, description } = this.state;
  //   const MIN_TITLE_LENGTH = 4;
  //   const MIN_DESCRIPTION_LENGTH = 10;
  //   if (title.length > MIN_TITLE_LENGTH && description.length > MIN_DESCRIPTION_LENGTH) {
  //     this.setState ({
  //       disableButton: false,
  //     })
  //   } else {
  //     this.setState ({
  //       disableButton: true,
  //     })
  //   }
  // }

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
      </div>
    );
  }
}

export default App;
