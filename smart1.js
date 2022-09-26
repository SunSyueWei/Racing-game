
var button;
var button2;


function Car1skill(){
 c2_callFunction("car1skill");
}


function setDeviceId01(){
    deviceId01 = prompt('輸入SmartID ' , 'input Smart ID01');
    boardReady({board: 'Smart', device: deviceId01, transport: 'mqtt'}, function (board) {
    board.samplingInterval = 50;
    button = getPullupButton(board, 4);
    button.on('pressed', function () {
    Car1skill();
    });
  });
}

function Car2skill(){
 c2_callFunction("car2skill");
}

function setDeviceId02(){
    deviceId02 = prompt('輸入SmartID ' , 'input Smart ID02');
    boardReady({board: 'Smart', device: deviceId02, transport: 'mqtt'}, function (board) {
    board.samplingInterval = 50;
    button2 = getPullupButton(board, 4);
    button2.on('pressed', function () {
    Car2skill();
    });
  });
}
