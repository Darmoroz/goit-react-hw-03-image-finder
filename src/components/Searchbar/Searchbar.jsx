import PropTypes from 'prop-types';
import { Component } from 'react';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { SearchbarStyled, SearchForm } from './Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    search: '',
  };
  componentDidMount() {
    this.setState({ search: '' });
  }
  // componentWillUnmount() {}
  // componentDidUpdate() {}

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { search } = this.state;
    if (search.trim() === '') {
      return;
    }
    onSubmit(search);
    // this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit" aria-label="search">
            <SearchIcon width="36" />
          </button>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Image search"
            value={search}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
