// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//     try {
//         await mongoose.connect("'mongodb+srv://Tejaram:Mongodb%40449@cluster0.rryadow.mongodb.net/game'", {
//         });
//         console.log('MongoDB is now working....')
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
//'mongodb+srv://Tejaram:Mongodb%40449@cluster0.rryadow.mongodb.net/bus

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/bus', {
            useNewUrlParser: true, // Add this option
            useUnifiedTopology: true, // Also add this option for the new Server Discover and Monitoring engine
        });
        console.log('MongoDB is now working....');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
