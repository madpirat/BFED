const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true });

mongoose.connection
    .once('open', () => console.log('We are conected'))
    .on('error', (error) => {
        console.warn('An error occured', error)
    })