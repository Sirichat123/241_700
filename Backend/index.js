//importโมดูลhttp
const http = require('http');
const host = 'localhost';
const port = 8000;
//กำหนดค่าเซิร์ฟเวอร์
const reqestlistener = function(req, res) {
    res.writeHead(200);
    res.end('Hello, World! This is my first server.');
}
//runเซิร์ฟเวอร์
const server = http.createServer(reqestlistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});