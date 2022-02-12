const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://graduationproject:1234@cluster0.iwazj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failure!');
    }

}

module.exports = { connect };
