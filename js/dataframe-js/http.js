var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
    console.log(this.responseText.msg);
    const data=this.responseText.data;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://data.zjzwfw.gov.cn/jdop_front/interfaces/cata_6008/get_data.do?pageNum=1&pageSize=10&appsecret=208dd531559c420aa5f77bfaadd02ff2");
oReq.send();
