var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let baseUrl='http://localhost:3000/'

let httpRequest=function(methods,url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                console.log('xhr.responseText:',xhr.responseText);
            } else {
                console.log("Request was unsuccessful: " + xhr.status);
            }
        }
    }
    xhr.open(methods, baseUrl+url, false);
    xhr.send();
}

httpRequest('get','users');
