import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class ActionHeader extends Component {
  
  hadelSort() {
    console.log('hadeling sort');
  }

  render() {
    const { propertyView, changePropertyView, updateSort } = this.props;

    return (
      <div className="action-header">
          <div className="container">
              <div className="action-header__item action-header__item--search">
                  <form>
                      <input className="hidden-xs" type="text" placeholder="Search by neighborhood, city, zip or address..." />{/* <!-- For desktop --> */}
                      <input className="visible-xs" type="text" placeholder="Search..." />{/* <!-- For mobile --> */}
                  </form>
              </div>

              <div className="action-header__item action-header__views hidden-xs">
                  <a onClick={ (e) => changePropertyView( e, 'grid' ) } className={`zmdi zmdi-apps ${ propertyView === 'grid' ? 'active' : '' }`}></a>
                  <a onClick={ (e) => changePropertyView( e, 'list' ) } className={`zmdi zmdi-view-list ${ propertyView === 'list' ? 'active' : '' }`}></a>
              </div>

              <div className="action-header__item action-header__item--sort hidden-xs">
                  <span className="action-header__small">Sort by :</span>

                  <select onChange={ this.hadelSort } id="filterSort" name="filterSort" className="select2">
                      <option value="1">Price hight to low</option>
                      <option value="2">Price low to high</option>
                  </select>
              </div>
          </div>
      </div> 
    )
  }
}

ActionHeader.propTypes = {
  changePropertyView: Proptypes.func.isRequired,
  propertyView: Proptypes.string.isRequired,
  updateSort: Proptypes.func.isRequired,

}