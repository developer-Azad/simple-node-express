const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
    res.send('Assalamu Alaikum Warohmatullah from Abul kalam Azad');
});

const users = [
    {id: 0, name: 'Mannan', email: 'Shabana@gmail.com', phone: '01789287342'},
    {id: 1, name: 'mamun', email: 'Shabana@gmail.com', phone: '01979287341'},
    {id: 2, name: 'Khaleque', email: 'Shabana@gmail.com', phone: '01389287343'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('post hitting', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    //use params
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
})