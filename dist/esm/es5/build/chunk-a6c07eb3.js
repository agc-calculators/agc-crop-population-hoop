/*! Built with http://stenciljs.com */
var validate=function(e,a){var t=e.querySelector('[name="'+a+'"]'),n=e.querySelector('[data-validates="'+a+'"');return t.checkValidity()?(t.className=t.className.replace(" invalid",""),n.style.display="none",!0):(-1===t.className.indexOf("invalid")&&(t.className+=" invalid"),n.style.display="block",!1)},matches=function(e,a){return e.matches.call(e,a)},mapEnterKey=function(e){return function(a){var t=document.querySelector(":focus"),n=Array.from(e.querySelectorAll("input, a, select, button, textarea")).map(function(e){return e});t.classList.contains("agc-wizard__actions-next")||function(){if(13===a.which&&!matches(t,"textarea")){!n.indexOf(t)||matches(t,"a")||matches(t,"button")||a.preventDefault();var r=n[n.indexOf(t)+(a.shiftKey?-1:1)];r?r.focus():n[0].focus(),r&&r.select(),t&&t.willValidate&&validate(e,t.name)}}()}},round=function(e,a){return+(Math.round(new Number(e+"e+"+a).valueOf())+"e-"+a)},numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};export{validate as a,round as b,mapEnterKey as c,numberWithCommas as d};