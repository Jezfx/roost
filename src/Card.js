import React, { Component } from 'react';
import './Card.css';

export default class Cards extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="listings-grid__item">
                    <a href="listing-detail.html">
                        <div className="listings-grid__main">
                            <img src="img/demo/listing/thumbs/4.jpg" alt="" />
                            <div className="listings-grid__price">$2,542,000</div>
                        </div>

                        <div className="listings-grid__body">
                            <small>132 Lockslee, San Francisco</small>
                            <h5>Pellentesque habitant</h5>
                        </div>

                        <ul className="listings-grid__attrs">
                            <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 05</li>
                            <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 03</li>
                            <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 03</li>
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
        )
    }
}
