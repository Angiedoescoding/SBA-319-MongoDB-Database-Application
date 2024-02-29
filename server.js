const express = require('express');
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
        app.use('/timeOffRequests', timeOffR);      // timeo off requests router

    
    // Populate collections with initial data
        const employeesData = require('./utilities-data/employees');
        const timeOffRequestsData = require('./utilities-data/timeOffRequests');
        const locationsData = require('./utilities-data/locations');

        db.collection('employees').insertMany(employeesData);
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


// Populate collections with initial data
// const employeesData = require('./utilities-data/employees');
// const timeOffRequestsData = require('./utilities-data/timeOffRequests');
// const locationsData = require('./utilities-data/locations');

// db.collection('employees').insertMany(employeesData);
// db.collection('timeOffRequests').insertMany(timeOffRequestsData);
// db.collection('locations').insertMany(locationsData)
