import React from 'react'
import PropTypes from 'prop-types'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      likeNumber: 0,
      retweetNumber: 0
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleRetweetClick = this.handleRetweetClick.bind(this);
  }

  handleLikeClick(){
    this.setState({like: true});
    this.setState({likeNumber: this.state.likeNumber + 1});
  }

  handleRetweetClick(){
    this.setState({retweetNumber: this.state.retweetNumber + 1})
  }

  render(){
    var icon = {
      width: '70px',
      float: 'left'
    }

    var tweetBox = {
      border: 'solid 1px grey'
    }
    console.log('Tweet: ', this.props);
    return(
      <div style={tweetBox}>
        <p><img style={icon} alt='profile-picture' src='https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'></img><br/>{this.props.author}<br/>{this.props.tweet}</p>
        <p onClick={this.handleRetweetClick}>🔁 <span>{this.state.retweetNumber}</span></p>
        <p onClick={this.handleLikeClick}>❤️ <span>{this.state.likeNumber}</span></p>
      </div>
    );
  }
}

Tweet.propTypes = {
  author: PropTypes.string,
  tweet: PropTypes.string
}

export default Tweet;
