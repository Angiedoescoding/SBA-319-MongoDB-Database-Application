const express = require('express');
const router = express.Router();
//const locationsData = require('../utilities-data/locations')


const locations = [
    { id: 1, depLoc: "Asgard", zip: 111111 },
    { id: 2, depLoc: "Seattle", zip: 22222 },
    { id: 3, depLoc: "New York", zip: 33333 },
    { id: 4, depLoc: "Tokio", zip: 44444 },
    { id: 5, depLoc: "Madrid", zip: 55555 }
];

// Get all locations --- Create GET routes
router.get('/', (req, res) => {
    res.json(locations);
});

// GET a single location by ID
router.get('/:id', (req, res) => {
    const locationId = parseInt(req.params.id);
    const location = locations.find(loc => loc.id === locationId);
    if (!location) return res.status(404).send('Location not found.');
    res.json(location);
});

// POST a new location --- Create POST routes
router.post('/', (req, res) => {
    const newLocation = {
        id: locations.length + 1,   // addint the next id number of the location
        depLoc: req.body.depLoc,
        zip: req.body.zip,
    };
    locations.push(newLocation);
    res.send("New location has been added.");
});

// PATCH/PUT (update) an employee by ID --- Create PATCH or PUT routes for data
router.put('/:id', (req, res) => {
    const locationId = parseInt(req.params.id);             // represents the identifier of the location to be updated
    const locationIndex = locations.findIndex(loc => loc.id === locationId);            // finds the index of the location in the locations array that (if) matches the locationId extracted from the request
    if (locationIndex === -1) return res.status(404).send('Location not found');        // the id number can not be negative, so show an error
    
    locations[locationIndex] = {            // updating the location object at the specified locationIndex in the 'locations' array
        ...locations[locationIndex],        // ... creating a copy of the existing location object to ensure that we don't change the original object directly
        depLoc: req.body.depLoc || locations[locationIndex].depLoc,         // updating the depLoc property of the copied location object with the value if it exists. If nothing, than it keeps the original value of the depLoc
        zip: req.body.zip || locations[locationIndex].zip               // similar to hte above ˆ
    };
    res.send('Location updated');
});

// DELETE an employee by ID --- Create DELETE routes for data
router.delete('/:id', (req, res) => {
    const locationId = parseInt(req.params.id);
    const locationIndex = locations.findIndex(loc => loc.id === locationId);
    if (locationIndex === -1) return res.status(404).send('Location not found');        // -1 is indicating that the location with the specified id was not found -> show an error

    locations.splice(locationIndex, 1);     // removing the location object at the locationIndex from the array using the splice() method. It removes one element starting from the locationIndex, effectively deleting the location from the array.
    res.send('Location deleted');
});

module.exports = router; // Export the router instance
