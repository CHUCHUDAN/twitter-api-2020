const express = require('express')
const router = express.Router()
const tweetController = require('../../controllers/tweet-controller')

// 查看一篇推文
router.get('/:tweet_id', tweetController.getTweet)
// 新增推文(tweet)
router.get('/', tweetController.getTweets)
router.post('/', tweetController.postTweet)
module.exports = router
