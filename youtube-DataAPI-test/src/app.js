'use strict'

var urllib = require('urllib');

module.exports = {    
    httpGet : async function(url) {
        var response
        await urllib.request(url).then(function (r) {
            response = r
        }).catch(function (err) {
            console.error(err)
        })
        return response
    }
}