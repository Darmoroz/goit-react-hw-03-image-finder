// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchQuery: '',
    image: [],
    page: '',
  };
  // componentDidMount() {}
  // componentWillUnmount() {}
  // componentDidUpdate() {}

  handleSubmit = search => {
    this.setState({ searchQuery: search.trim() });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {searchQuery && <ImageGallery searchQuery={searchQuery} />}
      </>
    );
  }
}
