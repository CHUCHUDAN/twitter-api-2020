const express = require('express')
const router = express.Router()
const tweetController = require('../../controllers/tweet-controller')

// 瀏覽推文的所有回應
router.get('/:tweet_id/replies', tweetController.tweetReplies)
// 查看一篇推文
router.get('/:tweet_id', tweetController.getTweet)
// 瀏覽所有推文
router.get('/', tweetController.getTweets)
// 新增推文(tweet)
router.post('/', tweetController.postTweet)
module.exports = router
