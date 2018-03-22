var should = require('should')
var request = require('supertest')
var app = require('../src/app.js')

/*
•내가 좋아요한 동영상 리스트
•내가 구독하는 채널의 동영상 리스트
•비디오 카테고리별 인기 동영상 리스트
•지역을 기준으로 인기 동영상 리스트
•Youtube Home 에서 추천해 주는 동영상 리스트
•내 플레이리스트 목록
•비디오에 달린 Comment
•Live Stream 과 관련된 Chat Message
*/
var api_key = 'AIzaSyD8LQ2J3i5A6T-_uXCBADLj_ZZKwAbgbXw'
//result.res.statusCode, result.data.length, result.res.headers

describe('지역을 기준으로 인기 동영상 목록', function () {
    let testURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=3&regionCode=JP&key=' + api_key
    it(testURL, async function () {
         var result = await app.httpGet(innerURL)
         result.res.statusCode.should.be.equal(200)
         console.log(result.data)
    })
})

describe('내가 좋아요한 동영상 목록', function () {
    let testURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&myRating=like&maxResults=3&key=' + api_key
    it(testURL, async function () {
        var result = await app.httpGet(innerURL)
        result.res.statusCode.should.be.equal(200)
        console.log(result.data)
   })
})

describe('구독한 채널 목록', function () {
    let testURL = 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=' + api_key
    it(testURL, async function () {
        var result = await app.httpGet(innerURL)
        result.res.statusCode.should.be.equal(200)
        console.log(result.data)
   })
})

describe('특정 채널의 동영상 목록', function () {
    let channelId = 'UCU4SM3j_9TNWaSu8KdGV50g'
    let testURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+ channelId +'&key=' + api_key
    it(testURL, async function () {
        var result = await app.httpGet(innerURL)
        result.res.statusCode.should.be.equal(200)
        console.log(result.data)
   })
})

describe('비디오 카테고리별 인기 동영상 목록', function () {
    let categoryId = '24'
    let testURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=' + categoryId + '&key=' + api_key
    it(testURL, async function () {
        var result = await app.httpGet(innerURL)
        result.res.statusCode.should.be.equal(200)
        console.log(result.data)
   })
})

/*describe('Home화면 에서 추천해 주는 동영상 목록', function () {
})*/

describe('내 플레이리스트 목록', function () {
    let testURL = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&key=' + api_key
    it(testURL, async function () {
        var result = await app.httpGet(innerURL)
        result.res.statusCode.should.be.equal(200)
        console.log(result.data)
   })
})

/*describe('비디오에 달린 댓글 목록', function () {
})

describe('Live Stream 채팅 메시지 목록', function () {
})*/