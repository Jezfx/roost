import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from './utils/Formatters'
import './Filters.css'

export default class Filter extends Component {
    static propTypes = {
        toggleFilter: PropTypes.func.isRequired,
        handelFilterChange: PropTypes.func.isRequired,
        clearForm: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { toggleFilter, handelFilterChange, clearForm } = this.props;
        return (
            <div>
                <form ref={ input => this.form = input } className="filter">
                    <div className="filterBox">
                        <label>&nbsp;</label>
                        <a href="#" onClick={ (e) => clearForm(e, this.form) } className="btn-clear">Clear</a>
                    </div>                  
                    <div className="filterBox">
                        <label htmlFor="filterBedrooms">Bedrooms</label>
                        <select onChange={(e) => handelFilterChange(e.target)} id="filterBedrooms" name="filterBedrooms">
                            <option value="any">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="filterBox">
                        <label htmlFor="filterBathrooms">Bathrooms</label>
                        <select onChange={(e) => handelFilterChange(e.target)} id="filterBathrooms" name="filterBathrooms">
                            <option value="any">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="filterBox">
                        <label htmlFor="filterCars">Car Spaces</label>
                        <select onChange={(e) => handelFilterChange(e.target)} id="filterCars" name="filterCars">
                            <option value="any">Any</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="filterBox filterFrom">
                        <label htmlFor="priceFrom">Min Price</label>
                        <select onChange={ (e) => handelFilterChange(e.target) } id="priceFrom" name="priceFrom">
                            <option value="0">Any</option>
                            <option value="500000">{formatPrice( 500000 )}</option>
                            <option value="600000">{formatPrice( 600000 )}</option>
                            <option value="700000">{formatPrice( 700000 )}</option>
                            <option value="800000">{formatPrice( 800000 )}</option>
                            <option value="900000">{formatPrice( 900000 )}</option>
                        </select>
                    </div>
                    <div className="filterBox">
                        <label htmlFor="priceTo">Max Price</label>
                        <select onChange={ (e) => handelFilterChange(e.target) } id="priceTo" name="priceTo">
                            <option value="1000001">Any</option>
                            <option value="600000">{ formatPrice( 600000 ) }</option>
                            <option value="700000">{ formatPrice( 700000 ) }</option>
                            <option value="800000">{ formatPrice( 800000 ) }</option>
                            <option value="900000">{ formatPrice( 900000 ) }</option>
                            <option value="1000000">{ formatPrice(1000000) }</option>
                        </select>
                    </div>
                </form>                
            </div>
        )
    }
}
