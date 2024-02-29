const express = require('express');
const router = express.Router();

const timeOffRequests = [
    { id: 1, date: "January 1, 2024", typeOffRequest: "Personal-Day", hoursADay: 8 },
    { id: 2, date: "March 25, 2024", typeOffRequest: "Vacation", hoursADay: 8 },
    { id: 3, date: "June 10, 2024", typeOffRequest: "Sick Leave", hoursADay: 3 }
];

// GET all time off requests
router.get('/', (req, res) => {
    res.json(timeOffRequests);
});


// GET a single time off request by ID
router.get('/:id', (req, res) => {
    const requestId = parseInt(req.params.id);
    const request = timeOffRequests.find(req => req.id === requestId);
    if (!request) return res.status(404).send('Time off request record not found.');
    res.json(request);
});


// POST a new time off request
router.post('/', (req, res) => {

    const newRequest = {
        id: timeOffRequests.length + 1,
        date: req.body.date,
        typeOffRequest: req.body.typeOffRequest,
        hoursADay: req.body.hoursADay
    };
    timeOffRequests.push(newRequest);
    res.send('Time off request record added.');
});


