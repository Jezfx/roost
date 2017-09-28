import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from './utils/Formatters.js';
import './Card.css';

export default class Card extends Component {    
    
	constructor(props){
    super(props)
    this.hanelClick = this.hanelClick.bind(this);
  }
  
  hanelClick( e, property ) {
    e.preventDefault();
    this.props.setActiveProperty( property, false );
  }
    render() {

      const { price, picture, address, bedrooms, bathrooms, carSpaces, _id, index } = this.props.property;
      const { setActiveProperty, propertyView, property } = this.props;

      return (
        <div>
          { propertyView === 'grid' &&
            <div onClick={ (e) => this.hanelClick(e, property) } className={`col-sm-6 col-md-4 id-${ index }`}>
                <div className={`listings-grid__item ${ _id === this.props.activeProperty._id ? 'listings-grid__item--active' : '' }`}>
                    <a>
                        <div className="listings-grid__main">
                            <img src={ picture } alt="" />
                            <div className="listings-grid__price">{ formatPrice( price ) }</div>
                        </div>

                        <div className="listings-grid__body">
                            <h5>{ address }</h5>
                        </div>

                        <ul className="listings-grid__attrs">
                            <li><i className="listings-grid__icon listings-grid__icon--bed"></i> { bedrooms }</li>
                            <li><i className="listings-grid__icon listings-grid__icon--bath"></i> { bathrooms }</li>
                            <li><i className="listings-grid__icon listings-grid__icon--parking"></i> { carSpaces }</li>
                        </ul>
                    </a>

                    <div className="actions listings-grid__favorite">
                        <div className="actions__toggle">
                            <input type="checkbox" />
                            <i className="zmdi zmdi-favorite-outline"></i>
                            <i className="zmdi zmdi-favorite"></i>
                        </div>
                    </div>
                </div>
            </div>        
          }

          { propertyView === 'list' && 
            <div onClick={ ( e ) => this.hanelClick(e, property) } className={`col-sm-12 id-${ index }`}>
              <div className={`listings-grid__item ${ _id === this.props.activeProperty._id ? 'listings-grid__item--active' : '' }`}>
                  <a className="media">
                      <div className="listings-grid__main pull-left">
                        <img src={ picture } alt="" />
                        <div className="listings-grid__price">{ formatPrice( price ) }</div>
                      </div>

                      <div className="media-body">
                          <div className="listings-grid__body">
                            <h5>{ address }</h5>
                          </div>
                          <ul className="listings-grid__attrs">
                          <li><i className="listings-grid__icon listings-grid__icon--bed"></i> { bedrooms }</li>
                          <li><i className="listings-grid__icon listings-grid__icon--bath"></i> { bathrooms }</li>
                          <li><i className="listings-grid__icon listings-grid__icon--parking"></i> { carSpaces }</li>
                          </ul>
                      </div>
                  </a>

                  <div className="actions listings-grid__favorite">
                      <div className="actions__toggle">
                          <input type="checkbox" />
                          <i className="zmdi zmdi-favorite-outline"></i>
                          <i className="zmdi zmdi-favorite"></i>
                      </div>
                  </div>
              </div>              
            </div>
          }          
        </div> 
      )
    }
}

Card.propTypes = {
    property: PropTypes.object.isRequired,
    activeProperty: PropTypes.object.isRequired,
    setActiveProperty: PropTypes.func.isRequired,
}