var DataFrame = require('dataframe-js').DataFrame;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.onload = function() {
    let response=JSON.parse(xhr.responseText);
    // console.log(`Loaded: ${xhr.status} ${xhr.responseText}`);
    DataFrame.fromJSON(response.data).then(df => df.show());
};
xhr.onerror = function() { // only triggers if the request couldn't be made at all
    console.log(`Network Error`);
};
xhr.onprogress = function(event) { // triggers periodically
                                   // event.loaded - how many bytes downloaded
                                   // event.lengthComputable = true if the server sent Content-Length header
                                   // event.total - total number of bytes (if lengthComputable)
    console.log(`Received ${event.loaded} of ${event.total}`);
};
xhr.open("GET", "http://data.zjzwfw.gov.cn/jdop_front/interfaces/cata_6008/get_data.do?pageNum=1&pageSize=10&appsecret=208dd531559c420aa5f77bfaadd02ff2");
xhr.send();
