import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      nameFilter,
      filterByName,
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
          onChange={ filterByName }
        />
      </section>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired,
};

export default Filters;
