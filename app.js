const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const users = [];
const contracts = [];

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.post('/user', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send('User added successfully');
});

app.post('/contract', (req, res) => {
  const contract = req.body;
  contracts.push(contract);
  res.status(201).send('Contract added successfully')
})

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/contracts', (req, res) => {
  res.status(200).json(contracts);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
