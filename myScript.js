// ==UserScript==
// @name           Rock Werchter Bands timetable helper
// @description    Provides functionality like that of the RW app
// @author         Eoghan Gibbons
// @match        https://www.rockwerchter.be/*
// @require	   https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @version        1.0
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(".selected-item-act {background-color: orange !important; color: white !important;}");

$('a').on("click", function(e) {
    let target = e.currentTarget;
    if (target.classList.contains("act-schedule__acts-act")) {
        e.preventDefault();
        if (target.classList.contains("selected-item-act")) {
            target.classList.remove("selected-item-act");
        } else {
            target.classList.add("selected-item-act");
        }
    }
});
