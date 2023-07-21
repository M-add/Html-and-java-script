// Import required libraries
import * as tf from '@tensorflow/tfjs';
import * as transformers from 'https://cdn.skypack.dev/@tensorflow-models/hub';

// Define the tweet
var tweet = 'Great content! subscribed 😉';

// Preprocess tweet
var tweetWords = [];
var words = tweet.split(' ');
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  if (word.startsWith('@') && word.length > 1) {
    word = '@user';
  } else if (word.startsWith('http')) {
    word = 'http';
  }
  tweetWords.push(word);
}
var tweetProc = tweetWords.join(' ');

// Load model and tokenizer
var roberta = 'cardiffnlp/twitter-roberta-base-sentiment';
var model, tokenizer;
async function loadModelAndTokenizer() {
  model = await transformers.load(roberta);
  tokenizer = await transformers.loadTokenizer(roberta);
}
loadModelAndTokenizer();

// Sentiment analysis
async function performSentimentAnalysis() {
  await loadModelAndTokenizer();

  var encodedTweet = await tokenizer.encode(tweetProc);
  var input = tf.tensor2d(encodedTweet, [1, encodedTweet.length]);

  var output = await model.predict(input);
  var scores = await output.array();

  var labels = ['Negative', 'Neutral', 'Positive'];
  for (var i = 0; i < scores[0].length; i++) {
    var label = labels[i];
    var score = scores[0][i];
    console.log(label, score);
  }
}
performSentimentAnalysis();
