
var button;

boardReady({board: 'Smart', device: '10dk5DXV', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  button = getPullupButton(board, 4); 
  button.on('pressed', function () {
    Car1skill();
    });
  });

boardReady({board: 'Smart', device: 'EGwxW', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  button = getPullupButton(board, 4); 
  button.on('pressed', function () {
    Car2skill();
  });
});




function Car1skill(){
 c2_callFunction("car1skill");
}

function Car2skill(){
 c2_callFunction("car2skill");
}


