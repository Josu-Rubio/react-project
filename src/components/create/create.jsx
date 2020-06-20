import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createStore from '../../redux/store';
import { create } from '../../API';
import {
  createAds,
  createAdsName,
  createAdsSell,
  createAdsTag,
  createAdsPrice,
  createAdsDescription,
  createAdsUrl,
} from '../../redux/actions';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  typeName = (event) => {
    createStore.dispatch(createAdsName(event.target.value));
  };
  selectSell = (event) => {
    createStore.dispatch(createAdsSell(event.target.value));
  };
  fillTag = (event) => {
    createStore.dispatch(createAdsTag(event.target.value));
  };
  typePrice = (event) => {
    createStore.dispatch(createAdsPrice(event.target.value));
  };
  typeDescription = (event) => {
    createStore.dispatch(createAdsDescription(event.target.value));
  };
  pasteUrl = (event) => {
    createStore.dispatch(createAdsUrl(event.target.value));
  };
  submitAndAlert = async (event) => {
    event.preventDefault();
    createStore.dispatch(
      createAds(
        await create(
          createStore.getState().createAds.adBuilder.name,
          createStore.getState().createAds.adBuilder.sell,
          [createStore.getState().createAds.adBuilder.tag],
          createStore.getState().createAds.adBuilder.price,
          createStore.getState().createAds.adBuilder.description,
          createStore.getState().createAds.adBuilder.url
        )
      )
    );
    console.log(createStore.getState().createAds.finalAd);
    if (createStore.getState().createAds.finalAd.success === false) {
      this.setState({ error: createStore.getState().createAds.finalAd.error });
      alert(this.state.error);
    } else if (createStore.getState().createAds.finalAd.sucess === true) {
      alert(
        `Congratulations! The Ad. "${
          createStore.getState().createAds.adBuilder.name
        }" has been created`
      );
      window.location.pathname = 'apiv1/anuncios';
    } else alert('Unknow error. Please try again later.');
  };

  render() {
    const name = createStore.getState().createAds.adBuilder.name;
    const sell = createStore.getState().createAds.adBuilder.sell;
    const tag = createStore.getState().createAds.adBuilder.tag;
    const price = createStore.getState().createAds.adBuilder.price;
    const description = createStore.getState().createAds.adBuilder.description;
    const url = createStore.getState().createAds.adBuilder.url;

    return (
      <div className='create-add'>
        <h1>Fill the form to create your Ad</h1>
        <form onSubmit={this.submitAndAlert}>
          <div>
            <h3>Insert a name:</h3>
            <input
              type='text'
              placeholder='Name'
              required
              name={name}
              onChange={this.typeName}
            />
          </div>
          <div>
            <h3>Put a price:</h3>
            <input
              type='number'
              required
              placeholder='Price'
              price={price}
              onChange={this.typePrice}
            ></input>
          </div>
          <div>
            <h3>Do you sell it? Do you want it?</h3>
            <select id='buy/sell' sell={sell} onChange={this.selectSell}>
              <option value='sell'>Sell</option>
              <option value='buy'>Buy</option>
            </select>
          </div>
          <div>
            <h3> Select a Tag!</h3>
            <select id='tags' tag={tag} onChange={this.fillTag}>
              <option value='lifestyle'>Lifestyle</option>
              <option value='mobile'>Mobile</option>
              <option value='motor'>Motor</option>
              <option value='work'>Work</option>
            </select>
          </div>
          <div>
            <h3>Insert de URL of the picture tp upload:</h3>
            <input
              type='url'
              id='photo'
              required
              url={url}
              onChange={this.pasteUrl}
            ></input>
          </div>
          <div>
            <h3>Insert a description here:</h3>
            <input
              id='description'
              required
              description={description}
              placeholder='Description of your Ad.'
              onChange={this.typeDescription}
            ></input>
          </div>
          <br />
          <button value='Submit'>Submit</button>
        </form>
        <br />
        <Link to='/apiv1/anuncios/'>
          <button>Back to Menú</button>
        </Link>
        <Link to='/apiv1/login/'>
          <button>Log Out</button>
        </Link>
      </div>
    );
  }
}
