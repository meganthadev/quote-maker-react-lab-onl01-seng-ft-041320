import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';
import {bindActionCreators} from 'redux';

class Quotes extends Component {
const quotes = this.props.quotes.map((quote, id)=> {
  render() {
    return <QuoteCard 
              key={id} 
              quote={quote}
              upvoteQuote={this.props.upvoteQuote} 
              downvoteQuote= {this.props.downvoteQuote} 
              removeQuote= {this.props.removeQuote} 
            />
      }
    )
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return{
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
