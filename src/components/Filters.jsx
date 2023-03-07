import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      filterByValue,
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
        />

        <label htmlFor="">
          <select
            name="rareFilter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ filterByValue }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </section>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  filterByValue: PropTypes.func.isRequired,
};

export default Filters;
