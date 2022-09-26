
var button;

boardReady({board: 'Smart', device: 'EGwxW', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  button = getPullupButton(board, 4); 
  button.on('pressed', function () {
    Car2skill();
  });
});


function Car2skill(){
 c2_callFunction("car2skill");
}


function setDeviceId02(){
    deviceId01 = prompt('輸入SmartID ' , 'input Smart ID02');
    boardReady({board: 'Smart', device: deviceId02, transport: 'mqtt'}, function (board) {
    board.samplingInterval = 50;
    button = getPullupButton(board, 4);
    button.on('pressed', function () {
    Car2skill();
    });
  });
}

