'use strict';

var data = {};

chrome.webNavigation.onCompleted.addListener(function (url) {
    if (url.url.includes('/hwinfo/' + chrome.runtime.id)) {

        chrome.system.cpu.getInfo(function (info) {
            data.cpu = info.modelName;

            chrome.system.memory.getInfo(function (info) {

                data.cap = Math.round(info.capacity / Math.pow(2, 30));
                data.ava = Math.round(info.availableCapacity / Math.pow(2, 30));

                var canvas = document.createElement('canvas');
                var webgl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                var debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
                if (webgl) {
                    data.gpu = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                }

                var queryString = Object.keys(data).map((key) => {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
                }).join('&');

                var xhr = new XMLHttpRequest();
                xhr.open("GET", url.url + '/?' + queryString, true);
                xhr.send();                
            });
        });
    }
});
