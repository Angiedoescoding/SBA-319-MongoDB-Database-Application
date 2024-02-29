const express = require('express');
// import { MongoClient } from 'mongodb'; // To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
const { MongoClient } = require('mongodb');
const employeeR = require('./routes/employeeR');
const locationR = require('./routes/locationR');
const timeOffR = require('./routes/timeoffR');
const dotenv = require('dotenv');           // uncommented during the office hours

dotenv.config();                            // loading environment variabled from the .env

const app = express();
const PORT = process.env.PORT || 3000;
//const myDB = new MongoClient(process.env.ATLAS_URI);      -- tested during the office hours - didn't work; commenting out
// await MongoClient.connect(process.env.ATLAS_URI);        -- tested during the office hours - didn't work, terminal errors; commenting out
//let checkDB = myDB.connect();                             -- tested during the office hours - didn't work; commenting out


// checkDB.db('nameofdb')       -- tested during the office hours; no time left, commenting out

async function main() {
    try {

    // Connect to MongoDB
        const client = await MongoClient.connect(process.env.ATLAS_URI);
        const db = client.db();         // Get the default database from the MongoDB client
        console.log('Connected to MongoDB');

    //Middleware
        app.use(express.json());

    //Routes
        app.use('/employees', employeeR);           // employees router
        app.use('/locations', locationR);           // locations router
        app.use('/timeOffRequests', timeOffR);      // time off requests router

    
    // Populate collections with initial data
        const employeesData = require('./utilities-data/employees');
        const timeOffRequestsData = require('./utilities-data/timeOffRequests');
        const locationsData = require('./utilities-data/locations');

    db.collection('employees').insertMany(employeesData);    // error I am seeing: MongoInvalidArgumentError: Argument "docs" must be an array of documents at main (/Users/Per-Scholas/MongoDB/MongoDB-319-SBA/server.js:42:36) --------- > fixed by adding data and module export to the js files of the utilities-data folder
    db.collection('timeOffRequests').insertMany(timeOffRequestsData);
    db.collection('locations').insertMany(locationsData);


    // Global error handling
    app.use((err, _req, res, _next) => {            // stackoverflow help
        console.error(err);
        res.status(500).send('Seems like there is an error.');
    });


    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

main();         // calling the function to start the application