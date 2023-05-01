require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');


// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000; // default port to listen
app.listen(port,console.log(`Server running on port ${port}`));