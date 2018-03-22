var should = require('should')
var request = require('supertest')
var app = require('../src/app.js')

/*
•내가 좋아요한 동영상 리스트
•내가 구독하는 채널의 동영상 리스트
•비디오 카테고리별 인기 동영상 리스트
•지역을 기준으로 인기 동영상 리스트
•Youtube Home 에서 추천해 주는 동영상 리스트
•내 플레이리스트
•비디오에 달린 Comment
•Live Stream 과 관련된 Chat Message
*/
var api_key = 'AIzaSyD8LQ2J3i5A6T-_uXCBADLj_ZZKwAbgbXw'
//result.res.statusCode, result.data.length, result.res.headers
describe('인기 동영상 ', function () {
    var reqUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1&key=' + api_key
    
    it('성공', async function () {
         var result = await app.httpGet(innerUrl)
         result.res.statusCode.expect(200)         
    })
})



