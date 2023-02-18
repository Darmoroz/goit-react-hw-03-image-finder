import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryGrid } from './ImageGallery.styled';

import { fetchImages } from 'services/api';

export class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };
  state = {
    images: [],
    totalHits: 0,
    loading: false,
    showModal: false,
    page: 1,
    search: '',
    largeImageURL: '',
    tags: '',
  };
  componentDidMount() {
    const { searchQuery } = this.props;
    this.setState({ search: searchQuery });
  }
  // componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { page, search } = this.state;
    try {
      if (prevProps.searchQuery !== searchQuery) {
        this.setState({ images: [], search: searchQuery });
      }
      if (prevState.search !== searchQuery || prevState.page !== page) {
        this.setState({ search: searchQuery, loading: true });
        const res = fetchImages(search, page);
        res.then(({ hits }) => {
          if (!hits) {
            throw new Error('We have nothing for this query');
          }
          const newImages = hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => ({
              id,
              tags,
              webformatURL,
              largeImageURL,
            })
          );
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
            loading: false,
          }));
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleClickImg = e => {
    const { nodeName, attributes } = e.target;
    if (nodeName === 'IMG') {
      console.log(attributes);
      this.setState({
        showModal: true,
        largeImageURL: attributes['data-large-image'].value,
        tags: attributes.alt.value,
      });
      console.dir(e.target);
      // this.setState({ largeImageURL: e.target, tags: e.target });
      // this.toggleModal();
    }
  };

  render() {
    const { showModal, images, largeImageURL, tags, loading } = this.state;
    console.log(images);
    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} width={800} />
          </Modal>
        )}
        <ImageGalleryGrid onClick={this.handleClickImg}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <li key={id}>
                <ImageGalleryItem
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              </li>
            );
          })}
        </ImageGalleryGrid>
        {loading && <Loader />}
        <Button loadMore={this.handleLoadMore} />
      </>
    );
  }
}
