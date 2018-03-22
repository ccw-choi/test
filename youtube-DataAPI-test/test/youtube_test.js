var should = require('should')
var request = require('supertest')
var app = require('../src/app.js')

var api_key = 'AIzaSyD8LQ2J3i5A6T-_uXCBADLj_ZZKwAbgbXw'

describe('Youtube DataAPI 테스트', function () {
    describe('지역을 기준으로 인기 동영상 목록', function () {
        let testURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=3&regionCode=JP&key=' + api_key
        it(testURL, async function () {
            var result = await app.httpGet(testURL)
            result.res.statusCode.should.be.equal(200)
            console.log(result.data.toString())
        })
    })

    describe('내가 좋아요한 동영상 목록', function () {
        let testURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&myRating=like&maxResults=3&key=' + api_key
        it(testURL, async function () {
            var result = await app.httpGet(testURL)
            result.res.statusCode.should.be.equal(200)
            console.log(result.data.toString())
       })
    })

    describe('특정 채널의 동영상 목록', function () {
        let channelId = 'UCU4SM3j_9TNWaSu8KdGV50g'
        let testURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+ channelId +'&key=' + api_key
        it(testURL, async function () {
            var result = await app.httpGet(testURL)
            result.res.statusCode.should.be.equal(200)
            console.log(result.data.toString())
      })
    })

    describe('비디오 카테고리별 인기 동영상 목록', function () {
        let categoryId = '24'
        let testURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=' + categoryId + '&key=' + api_key
        it(testURL, async function () {
            var result = await app.httpGet(testURL)
            result.res.statusCode.should.be.equal(200)
            console.log(result.data.toString())
       })
    })


    describe('특정 채널의 플레이리스트 목록', function () {
        let channelId = 'UCU4SM3j_9TNWaSu8KdGV50g'
        let testURL = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId='+ channelId +'&key=' + api_key
        it(testURL, async function () {
            var result = await app.httpGet(testURL)
            result.res.statusCode.should.be.equal(200)
            console.log(result.data.toString())
       })
    })
    //describe('구독한 채널 목록', function () {})
    //describe('Home화면 에서 추천해 주는 동영상 목록', function () {})
    //describe('비디오에 달린 댓글 목록', function () {})
    //describe('Live Stream 채팅 메시지 목록', function () {})
})
