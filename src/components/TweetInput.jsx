import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Feed from './Feed'
// import handleNewTweetSubmission from './App'

function TweetInput(props){
  let _author = null;
  let _tweet = null;
  console.log('submit props: ', props)

  var icon = {
    width: '70px'
  }

  var tweetInput = {
    marginLeft: '20px',
    padding: '4px',
    textAlign: 'center',
    border: '2px solid lightblue'
  }
  function onSubmissionDoThing(e) {
    e.preventDefault();
    console.log('submissionDoThing: ', props)
    props.onNewTweetCreation({ author: _author.value, tweet: _tweet.value, id: v4() })
    _author.value = '';
    _tweet.value = '';
  }

  return (
    <div>
      <img style={icon} src='https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'></img>
      <form onSubmit={onSubmissionDoThing}>
        <input
          style={tweetInput}
          type="text"
          id="author"
          placeholder="What's your name?"
          ref={(input) => {_author = input;}}/>
        <input
          style={tweetInput}
          type="text"
          id="tweet"
          placeholder="What's happening?"
          ref={(input) => {_tweet = input;}}/>
        <button type='submit'>Post Tweet</button>
      </form>
    </div>
  )
}

TweetInput.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default TweetInput;
