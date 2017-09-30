import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Filters from './Filters.js'
import filter from './img/icons/filter.svg';
import close from './img/icons/close.svg';
import './ActionHeader.css'

export default class ActionHeader extends Component {
  render() {
    const { propertyView, changePropertyView, showFilter, toggleFilter, handelFilterChange } = this.props;
    const filterIcon = showFilter ? close : filter;

    return (
      <div className="action-header">
          <div className="container">

              <div className="action-header__sort">
                <div className="action-header__item action-header__item--search">
                    <form className="form-control">
                        <input className="hidden-xs" type="text" placeholder="Search by neighborhood, city, zip or address..." />{/* <!-- For desktop --> */}
                        <input className="visible-xs" type="text" placeholder="Search..." />{/* <!-- For mobile --> */}
                    </form>
                </div>

                <div className="action-header__item action-header__views">
                  
                  <a className="action-header__filter-icon" onClick={ (e) => toggleFilter(e) } >
                    <img width="18" src={filterIcon} alt="filter"/>
                  </a>
                </div>                 

                <div className="action-header__item action-header__views hidden-xs">
                    <a onClick={ (e) => changePropertyView( e, 'grid' ) } className={`zmdi zmdi-apps ${ propertyView === 'grid' ? 'active' : '' }`}></a>
                    <a onClick={ (e) => changePropertyView( e, 'list' ) } className={`zmdi zmdi-view-list ${ propertyView === 'list' ? 'active' : '' }`}></a>
                </div>

                <div className="action-header__item action-header__item--sort hidden-xs">
                    <span className="action-header__small">Sort by :</span>

                    <form className="form-control">
                      <select onChange={ ( e ) => handelFilterChange( e.target ) } id="filterSort" name="filterSort" className="input-sm">
                          <option value="1">Price high to low</option>
                          <option value="2">Price low to high</option>
                      </select>                      
                    </form>
                </div>                                               
              </div>

              { showFilter &&
                <div className="action-header__filter">
                <Filters 
                  clearForm={ this.props.clearForm } 
                  showFilter={ this.props.showFilter } 
                  handelFilterChange={ this.props.handelFilterChange } 
                  toggleFilter={ this.props.toggleFilter } />                
              </div>              
              }              
          </div>
      </div> 
    )
  }
}

ActionHeader.propTypes = {
  changePropertyView: Proptypes.func.isRequired,
  propertyView: Proptypes.string.isRequired,
  clearForm: Proptypes.func.isRequired,
  toggleFilter: Proptypes.func.isRequired,
  handelFilterChange: Proptypes.func.isRequired,
  showFilter: Proptypes.bool.isRequired,
}