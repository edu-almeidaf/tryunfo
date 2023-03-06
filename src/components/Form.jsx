import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="">
          Nome:
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="">
          Descrição:
          <textarea name="" data-testid="description-input" cols="30" rows="10" />
        </label>

        <label htmlFor="">
          1° Atributo:
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="">
          2° Atributo:
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="">
          3° Atributo:
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>

        <label htmlFor="">
          Raridade:
          <select name="" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="">
          Super Trunfo:
          <input type="checkbox" name="" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
