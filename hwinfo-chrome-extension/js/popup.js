'use strict';

window.addEventListener('DOMContentLoaded', () => {
    var canvas = document.createElement('canvas');
    var webgl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    var debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
    if (webgl) {
        document.getElementById("gpu").innerHTML = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
    chrome.system.cpu.getInfo(function (info) {
        document.getElementById("cpu").innerHTML = info.modelName;
    });
    chrome.system.memory.getInfo(function (info) {
        document.getElementById("mc").innerHTML = Math.round(info.capacity / Math.pow(2, 30));
        document.getElementById("ma").innerHTML = Math.round(info.availableCapacity / Math.pow(2, 30));
    });

});
