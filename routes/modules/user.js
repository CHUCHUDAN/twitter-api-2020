const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const upload = require('../../middleware/multer')

// 使用者能編輯自己的資料
router.put('/:id', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'backgroundImage', maxCount: 1 }]), userController.putUser)
// 獲取使用者所寫過的推文資料
router.get('/:id/tweets', userController.getUserTweets)
// 獲取使用者所寫過的推文回覆資料
router.get('/:id/replied_tweets', userController.getUserReplies)
// 獲取使用者的like資料
router.get('/:id/likes', userController.getUserLikes)
// 獲取使用者所追蹤的所有人
router.get('/:id/followings', userController.getUserFollowings)
// 獲取追蹤該使用者的所有人
router.get('/:id/followers', userController.getUserFollowers)
// 查看使用者資料
router.get('/:id', userController.getUser)
// 查看推薦跟隨
router.get('/', userController.getTopUser)

module.exports = router
