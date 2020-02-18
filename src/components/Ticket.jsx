import React from 'react';
import PropTypes from 'prop-types';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: 0
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
   this.setState(prevState => ({
     totalVotes: prevState.totalVotes +1
   }))
  }

  handleDislike() {
    this.setState(prevState => ({
      totalVotes: prevState.totalVotes -1
    }))
   }

  render() {
    return (
      <div>
        <h3>
          {this.props.location} - {this.props.names}
        </h3>
        <p>
          <em>{this.props.issue}</em>
        </p>

        <button onClick={this.handleLike}>like</button>
        <span>{this.state.totalVotes}</span>
        <button onClick={this.handleDislike}>dislike</button>
        <hr />
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
