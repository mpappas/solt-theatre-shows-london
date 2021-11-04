import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showsList: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/shows/all-shows')
      .then((response) => response.json())
      .then((shows) => {
        this.setState({ showsList: shows });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { showsList, searchfield } = this.state;
    const filteredShows = showsList.filter((show) => {
      return show.title.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !showsList.length ? (
      <h1>Loading...!</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Today's Deals</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList showsList={filteredShows} />
      </div>
    );
  }
}

export default App;
