'use strict';
//https://github.com/prabirshrestha/reactjs-playground/blob/master/rss-feed/client/utils/feed.js
var $ = require('jquery');

var GetFeed = function (feedUrl, callback) {
    var url = window.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=150&callback=?&q=' + encodeURIComponent(feedUrl);
    $.getJSON(url, function (result) {
        if(!callback) return;
        if(result.responseStatus === 200) {
            callback(null, result.responseData.feed);
        } else {
            callback(new Error('failed to get feed from ' + feedUrl));
        }
    });
};
module.exports = GetFeed;