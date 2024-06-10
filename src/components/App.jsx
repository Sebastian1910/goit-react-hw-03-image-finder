import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    query: "",
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=43574769-6e37a5f1df9cad927843c4fc7&image_type=photo&orientation=horizontal&per_page=12`,
      );
      const data = await response.json();

      this.setState((prevState) => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: "" });
  };

  render() {
    const { images, loading, error, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default App;
