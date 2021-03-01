import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WithBookstoreService from "../components/hoc/with-bookstore-service";
import { fetchBooks } from "../actions";
import { compose } from "../utils";
import BookList from "../components/book-list";
import Spinner from "../components//spinner";
import ErrorIndicator from "../components/error-indicator";

const BookListContainer = ({ books, loading, error, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} />;
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
  }, dispatch);
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
