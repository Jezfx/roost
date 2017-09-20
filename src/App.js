import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
            <div className="container">
                <header className="section__title">
                    <h2>Duis mollisest non commodo luctus nisierat porttito</h2>
                    <small>Vestibulum id ligula porta felis euismod semper</small>
                </header>

                <div className="row listings-grid">
                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/1.jpg" alt="" />
                                    <div className="listings-grid__price">$1,175,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>21 Shop St, San Francisco</small>
                                    <h5>Integer tempor luctus maximus</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 03</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 02</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/2.jpg" alt="" />
                                    <div className="listings-grid__price">$1,200,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>Beverly Hills, CA 90210</small>
                                    <h5>Duis sollicitudin ante bibendum</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 03</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 03</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/3.jpg" alt="" />
                                    <div className="listings-grid__price">$910,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>132 04th St, San Francisco</small>
                                    <h5>Fusce quis libero nonorcious</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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

                    <div className="col-sm-6 col-md-3">
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/5.jpg" alt="" />
                                    <div className="listings-grid__price">$823,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>San Francisco, CA 900212 </small>
                                    <h5>Maecenas sed purus lorem aliquet cursus</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 0</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/6.jpg" alt="" />
                                    <div className="listings-grid__price">$1,120,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>21120 Broadway St, San Fransisco</small>
                                    <h5>Maecenas sed purus at lorem</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 03</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 02</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/7.jpg" alt="" />
                                    <div className="listings-grid__price">$3,000,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>San Francisco, CA 937202</small>
                                    <h5>Nullam finibus libero at hendrerit</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 06</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 05</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 02</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/8.jpg" alt="" />
                                    <div className="listings-grid__price">$1,175,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>4313 Beverly Hills, CA 90210</small>
                                    <h5>Donec ullamcorper nulla non metus auctor fringilla</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 03</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 02</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/9.jpg" alt="" />
                                    <div className="listings-grid__price">$2,675,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>121 Hickory Mount, MD 21771</small>
                                    <h5>Integer posuere eratante venenatis</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 05</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/10.jpg" alt="" />
                                    <div className="listings-grid__price">$575,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>677 Morris Lemont, IL 60439</small>
                                    <h5>Praesent commodo cursus scelerisque consectetur</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/11.jpg" alt="" />
                                    <div className="listings-grid__price">$4299,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>451 Henry Livingston, NJ 07039</small>
                                    <h5>Morbi leorisus consectetur vestibulum</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 06</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 06</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/12.jpg" alt="" />
                                    <div className="listings-grid__price">$2,329,980</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>722 Chestnut Dublin, GA 31021</small>
                                    <h5>Curabitur blandit tempus porttitor</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 04</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 04</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 04</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/13.jpg" alt="" />
                                    <div className="listings-grid__price">$1,100,900</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>409 Magnolia Mansfield, MA 02048</small>
                                    <h5>Aenean Pellentesque lacinia quam venenatis vestibulum</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/14.jpg" alt="" />
                                    <div className="listings-grid__price">$3,400,110</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>277 Elm Avenue, TN 37128</small>
                                    <h5>Cras mattis consectetur purus sit amet fermentum</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 05</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 02</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/15.jpg" alt="" />
                                    <div className="listings-grid__price">$1,200,000</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>304 East Wenatchee, WA 98801</small>
                                    <h5>Nullam iddolor idnibh ultricies vehicula</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 00</li>
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

                    <div className="col-sm-6 col-md-3">
                        <div className="listings-grid__item">
                            <a href="listing-detail.html">
                                <div className="listings-grid__main">
                                    <img src="img/demo/listing/thumbs/16.jpg" alt="" />
                                    <div className="listings-grid__price">900,900</div>
                                </div>

                                <div className="listings-grid__body">
                                    <small>735 San Angelo, TX 76901</small>
                                    <h5>Cras justo odio dapibus facilisis egestas</h5>
                                </div>

                                <ul className="listings-grid__attrs">
                                    <li><i className="listings-grid__icon listings-grid__icon--bed"></i> 02</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--bath"></i> 01</li>
                                    <li><i className="listings-grid__icon listings-grid__icon--parking"></i> 01</li>
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
                </div>

                <div className="load-more">
                    <a href=""><i className="zmdi zmdi-refresh-alt"></i> Load more listings</a>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
