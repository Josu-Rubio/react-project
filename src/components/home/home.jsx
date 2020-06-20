import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ads } from '../../API';
import createStore from '../../redux/store';
import { renderAds } from '../../redux/actions';

const BUY = [
  { id: '', name: 'None' },
  { id: 'compra', name: 'Buy' },
  { id: 'venta', name: 'Sell' },
];

const TAGS = [
  { id: '', name: 'None' },
  { id: 'Work', name: 'Work' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'iLifestyle', name: 'Lifestyle' },
  { id: 'Motor', name: 'Motor' },
];

class MakeAnAdd extends Component {
  render() {
    return (
      <div className='ad'>
        <div>
          <p className='ad-name'>
            {createStore.getState().renderAds.results[this.props.data].name}
          </p>
          <p className='ad-price'>
            {createStore.getState().renderAds.results[this.props.data].price}€
          </p>
        </div>
        <Link
          to={`/apiv1/anuncios/${
            createStore.getState().renderAds.results[this.props.data]._id
          }`}
        >
          <img
            src={
              createStore.getState().renderAds.results[this.props.data].photo
            }
            alt={createStore.getState().renderAds.results[this.props.data].name}
          />
        </Link>
      </div>
    );
  }
}

let ListAds = (props) => {
  let adList = [];
  const callingApi = props.callingApi;

  if (callingApi) {
    for (let i = 0; i < createStore.getState().renderAds.count; i++) {
      adList.push(<MakeAnAdd key={i} data={i} />);
    }

    console.log(adList.length);
    return <div className='ad-list'>{adList}</div>;
  }
  return null;
};

const queryInfo = (search, buy, tag, minPrice, maxPrice) => {
  let query = '';
  if (search !== '') {
    query = `?name=${search}`;
  }
  if (minPrice !== '' || maxPrice !== '') {
    if (query === '' && minPrice < maxPrice) {
      query = `?price=${minPrice}-${maxPrice}`;
    } else if (query !== '' && minPrice < maxPrice) {
      query = `&price=${minPrice}-${maxPrice}`;
    } else {
      alert(`Maximum price cannot be lower than minmum price!`);
    }
  }
  if (tag !== '') {
    if (query === '') {
      query = `?tag=${tag}`;
    } else {
      query = `${query}&tag=${tag}`;
    }
  }
  if (buy !== '') {
    if (buy === 'venta') {
      if (query === '') {
        query = '?venta=true';
      } else {
        query = `${query}&venta=true`;
      }
    } else {
      if (query === '') {
        query = '?venta=false';
      } else {
        query = `${query}&venta=false`;
      }
    }
  }
  return query;
};

export default class Home extends Component {
  state = {
    response: null,
    renderInfoTags: null,
    search: '',
    minPrice: '',
    maxPrice: '',
    tag: TAGS[0].id,
    buy: BUY[0].id,
  };
  searchInput = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  addMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value,
    });
  };
  addMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value,
    });
  };
  selectTag = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };
  selectBuy = (event) => {
    this.setState({
      buy: event.target.value,
    });
  };
  checkStatus = (response) => {
    if (createStore.getState().renderAds.success === false) {
      alert(`You have lost connection. Please log in again`);
      window.location.pathname = '/apiv1/login';
    } else if (createStore.getState().renderAds.success === true) {
      this.setState({ renderInfoTags: true });
    } else {
      alert(`Ooops! Theres's an error. Try logging in again`);
      window.location.pathname = '/apiv1/login';
    }
  };
  bringAds = async () => {
    createStore.dispatch(
      renderAds(
        await ads(
          queryInfo(
            this.state.search,
            this.state.buy,
            this.state.tag,
            this.state.minPrice,
            this.state.maxPrice
          )
        )
      )
    );
    this.checkStatus();
  };
  componentDidMount = () => {
    this.bringAds();
  };
  submitFilter = (event) => {
    event.preventDefault();
    this.setState({ renderInfoTags: false });
    this.setState({ response: null });
    this.bringAds();
  };

  render() {
    const { search, minPrice, maxPrice, buy, tag } = this.state;
    return (
      <div>
        <div>
          <form className='filter' onSubmit={this.submitFilter}>
            <p>Search: </p>
            <input type='text' search={search} onChange={this.searchInput} />
            <p>Select minimum and maximum price: </p>
            <input
              className='min'
              type='number'
              minprice={minPrice}
              onChange={this.addMinPrice}
            />
            <input
              className='max'
              type='number'
              maxprice={maxPrice}
              onChange={this.addMaxPrice}
            />
            <p>Tag filter: </p>
            <select tag={tag} onChange={this.selectTag}>
              {TAGS.map((tag) => (
                <option value={tag.id}>{tag.name}</option>
              ))}
            </select>
            <p>Sell or Buy? </p>
            <select buy={buy} onChange={this.selectBuy}>
              {BUY.map((buy) => (
                <option value={buy.id}>{buy.name}</option>
              ))}
            </select>
            <br />
            <button value='Submit'>Filter</button>
            <div className='create-Ad'>
              <Link to='/apiv1/anuncios/create'>
                <button>Create an Ad.</button>
              </Link>
            </div>
            <div className='log-out'>
              <Link to='/apiv1/login'>
                <button>Log Out</button>
              </Link>
            </div>
          </form>
        </div>
        <div>
          <ListAds
            callingApi={this.state.renderInfoTags}
            data={this.state.response}
          />
        </div>
      </div>
    );
  }
}
