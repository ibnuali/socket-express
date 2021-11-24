const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    setInterval(() => {
        socket.emit( "msg", "hitut")
    }, 1000);
});
// end of socket.io logic

module.exports = socketapi;