var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpInterface = (function (_super) {
    __extends(HttpInterface, _super);
    function HttpInterface() {
        return _super.call(this) || this;
        //this.sendGetRequest('http://127.0.0.1', '');
        //this.sendPostRequest();
    }
    HttpInterface.prototype.sendGetRequest = function (url, params) {
        var statusGetLabel = new egret.TextField();
        this.statusGetLabel = statusGetLabel;
        statusGetLabel.size = 18;
        statusGetLabel.text = "GET request being sent to httpbin.org";
        this.addChild(statusGetLabel);
        statusGetLabel.x = 50;
        statusGetLabel.y = 40;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url + params, egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    HttpInterface.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        return;
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
        this.statusGetLabel.text = "Get GET response!";
    };
    HttpInterface.prototype.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    HttpInterface.prototype.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpInterface.prototype.sendPostRequest = function () {
        var statusPostLabel = new egret.TextField();
        this.statusPostLabel = statusPostLabel;
        this.addChild(statusPostLabel);
        statusPostLabel.size = 18;
        statusPostLabel.x = 300;
        statusPostLabel.y = 40;
        statusPostLabel.text = "Sending POST request to httpbin.org";
        var params = "p1=postP1&p2=postP2";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("php/post_test.php", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    HttpInterface.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
        this.statusPostLabel.text = "Get POST response!";
    };
    HttpInterface.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    HttpInterface.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return HttpInterface;
}(egret.DisplayObjectContainer));
__reflect(HttpInterface.prototype, "HttpInterface");
//# sourceMappingURL=HttpInterface.js.map