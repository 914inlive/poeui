class ClientWS extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.initStateText();
        this.initWebSocket();
    }

    private stateText:egret.TextField;
    private text:string = "TestWebSocket";

    private initStateText():void {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    }

    private socket:egret.WebSocket;

    private initWebSocket():void {
        this.socket = new egret.WebSocket();
        this.socket.type = egret.WebSocket.TYPE_STRING;

        //ADD listener
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);

        //连接服务器
        this.socket.connect("127.0.0.1", 4000);
    }

    private sendData(msg: string):void {
        this.socket.writeUTF(msg);
    }

    private onSocketOpen():void {
        this.trace("WebSocket Open");
        this.sendData("Hello Egret WebSocket");
    }

    private onSocketClose():void {
        this.trace("WebSocket Close");
    }

    private onSocketError():void {
        this.trace("WebSocket Error");
    }

    private onReceiveMessage(e:egret.Event):void {
        var txt:string = this.socket.readUTF();
        this.trace("readUTF : "+txt);
    }

    private trace(msg:any):void {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        console.log(msg);
    }
}