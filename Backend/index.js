/*//importโมดูลhttp
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
});*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;

app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/user',(req,res)=>{
    let user = req.body;
    user.id = counter
    counter +=1

    users.push(user);
    res.json({
    message: 'User added successfully',
    user: user
    });
});

app.patch('/user/:id',(req, res)=>{
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user =>user.id == id);

    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
})

app.delete('/user/:id',(req, res)=>{
    let id = req.params.id;
        let selectedIndex = users.findIndex(user =>user.id == id);
        users.splice(selectedIndex, 1);
    delete users[selectedIndex];
    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    });
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});