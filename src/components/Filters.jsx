import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      trunfoFilter,
      filterByValue,
      filterDisabled,
    } = this.props;
    return (
      <section className="filters">
        <h2>Filtros:</h2>
        <input
          type="text"
          name="nameFilter"
          value={ nameFilter }
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ filterByValue }
          disabled={ filterDisabled }
        />

        <label htmlFor="">
          <select
            name="rareFilter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ filterByValue }
            disabled={ filterDisabled }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ filterByValue }
          />
        </label>
      </section>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  filterByValue: PropTypes.func.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};

export default Filters;
