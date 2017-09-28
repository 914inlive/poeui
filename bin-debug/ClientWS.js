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
var ClientWS = (function (_super) {
    __extends(ClientWS, _super);
    function ClientWS() {
        var _this = _super.call(this) || this;
        _this.text = "TestWebSocket";
        _this.initStateText();
        _this.initWebSocket();
        return _this;
    }
    ClientWS.prototype.initStateText = function () {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    };
    ClientWS.prototype.initWebSocket = function () {
        this.socket = new egret.WebSocket();
        this.socket.type = egret.WebSocket.TYPE_STRING;
        //ADD listener
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect("127.0.0.1", 4000);
    };
    ClientWS.prototype.sendData = function (msg) {
        this.socket.writeUTF(msg);
    };
    ClientWS.prototype.onSocketOpen = function () {
        this.trace("WebSocket Open");
        this.sendData("Hello Egret WebSocket");
    };
    ClientWS.prototype.onSocketClose = function () {
        this.trace("WebSocket Close");
    };
    ClientWS.prototype.onSocketError = function () {
        this.trace("WebSocket Error");
    };
    ClientWS.prototype.onReceiveMessage = function (e) {
        var txt = this.socket.readUTF();
        this.trace("readUTF : " + txt);
    };
    ClientWS.prototype.trace = function (msg) {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        console.log(msg);
    };
    return ClientWS;
}(egret.DisplayObjectContainer));
__reflect(ClientWS.prototype, "ClientWS");
//# sourceMappingURL=ClientWS.js.map