const mongoose = require('mongoose');

const connectionString = '***REMOVED***'

mongoose.connect(connectionString).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})