'use strict';

var host = chrome.extension.getURL('html/index.html')

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://*.thuisbezorgd.nl/*",
            "*://*.justeat.nl/*",
            "*://*.bezorgbeer.nl/*",
            "*://*.sotasty.nl/*",
            "*://*.ifoods.nl/*",
            "*://*.sneleten.nl/*",
            "*://*.dominos.com/*",
            "*://*.dominos.nl/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);