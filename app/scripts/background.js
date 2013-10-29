'use strict';

var host = "http://alolo.co/nofattie";

host = chrome.extension.getURL('html/index.html')

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://*.pizzahut.co.uk/*",
            "*://*.dominos.co.uk/*",
            "*://*.papajohns.co.uk/*",
            "*://*.just-eat.co.uk/*",
            "*://*.hungryhouse.co.uk/*",
            "*://*.grubhub.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);