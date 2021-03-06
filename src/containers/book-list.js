import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}  className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
// takes application state, array of books and active book, and whatever is returned will show up as props inside bookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
// naything returned fro this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps),(BookList);
