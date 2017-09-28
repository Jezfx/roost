import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Filters from './Filters.js'
import './ActionHeader.css'

export default class ActionHeader extends Component {
  render() {
    const { propertyView, changePropertyView, setActiveProperty, showFilter, toggleFilter } = this.props;

    return (
      <div className="action-header">
          <div className="container">

              <div className="action-header__sort">
                <div className="action-header__item action-header__item--search">
                    <form>
                        <input className="hidden-xs" type="text" placeholder="Search by neighborhood, city, zip or address..." />{/* <!-- For desktop --> */}
                        <input className="visible-xs" type="text" placeholder="Search..." />{/* <!-- For mobile --> */}
                    </form>
                </div>

                <div className="action-header__item action-header__views">
                  <button onClick={ (e) => toggleFilter(e) } >{ showFilter ? 'close' : 'filter' }</button>
                </div>                 

                <div className="action-header__item action-header__views hidden-xs">
                    <a onClick={ (e) => changePropertyView( e, 'grid' ) } className={`zmdi zmdi-apps ${ propertyView === 'grid' ? 'active' : '' }`}></a>
                    <a onClick={ (e) => changePropertyView( e, 'list' ) } className={`zmdi zmdi-view-list ${ propertyView === 'list' ? 'active' : '' }`}></a>
                </div>

                <div className="action-header__item action-header__item--sort hidden-xs">
                    <span className="action-header__small">Sort by :</span>

                    <select onChange={ (e) => setActiveProperty(e) } id="filterSort" name="filterSort">
                        <option value="1">Price hight to low</option>
                        <option value="2">Price low to high</option>
                    </select>
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
  setActiveProperty: Proptypes.func.isRequired,
  clearForm: Proptypes.func.isRequired,
  toggleFilter: Proptypes.func.isRequired,
  handelFilterChange: Proptypes.func.isRequired,
  showFilter: Proptypes.bool.isRequired,
}