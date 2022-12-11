// ==UserScript==
// @name         Anonymous Mode Roblox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Code here
    let robuxParent = document.getElementById('nav-robux-icon');
    let robux = document.getElementById('nav-robux-amount');
    let newRobux = robux;
    let robuxAmount = '1M'; // set the value as the amount of robux you want to have!

    robuxParent.removeChild(robux);
    const span = document.createElement("span");
    const node = document.createTextNode(robuxAmount);
    span.appendChild(node);
    span.setAttribute('class', 'rbx-text-navbar-right text-header')
    const element = document.getElementById("nav-robux-icon");
    element.appendChild(span);

    let otherRobux = document.getElementById('nav-robux-balance');
})();