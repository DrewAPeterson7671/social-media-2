import React from 'react';
import Tweet from './Tweet';
import TweetInput from './TweetInput';
import PropTypes from 'prop-types';


function Feed(props){
  console.log('props:', props)
  return(
    <div>
      <TweetInput
        addingNewTweetToList={props.onAddingNewTweetToList}
        onNewTweetCreation={props.handleNewTweetSubmission}/>
      {props.twitterFeed.map((tweet) =>
        <Tweet author={tweet.author}
          tweet= {tweet.tweet}
          key = {tweet.id} />
      )}
    </div>
  )
  console.log(tweet.author)
  console.log(tweet.tweet)
}

Feed.propTypes = {
  twitterFeed: PropTypes.array
};

export default Feed;

// <div>
//   <Tweet
//     author='User Name'
//     tweet='I am writing lots of words'/>
// </div>
