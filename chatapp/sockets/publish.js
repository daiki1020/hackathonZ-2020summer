'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('publishEvent', function (data) {
        io.sockets.emit('publishEvent', data);
    });
};
