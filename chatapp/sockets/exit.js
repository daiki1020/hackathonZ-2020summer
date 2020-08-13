'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitEvent', function (data) {
        console.log('サーバ側　退室 ' + data);
        socket.broadcast.emit('exitEvent', data);
    });
};
