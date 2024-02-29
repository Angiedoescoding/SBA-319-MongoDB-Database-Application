const express = require('express');
const router = express.Router();

// const timeOffRequests = [

//     { id: 1, date: "January 1, 2024", typeOffRequest: "Personal-Day", hoursADay: 8 },
//     { id: 2, date: "March 25, 2024", typeOffRequest: "Vacation", hoursADay: 8 },
//     { id: 3, date: "June 10, 2024", typeOffRequest: "Sick Leave", hoursADay: 3 }
// ];

const timeOffRequests = [
    { id: 1, date: new Date("2024-01-01"), typeOffRequest: "Personal-Day", hoursADay: 8 },
    { id: 2, date: new Date("2024-03-25"), typeOffRequest: "Vacation", hoursADay: 8 },
    { id: 3, date: new Date("2024-06-10"), typeOffRequest: "Sick Leave", hoursADay: 3 }
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


// PUT/PATCH to update an existing time off request

router.put('/:id', (req, res) => {

    const requestId = parseInt(req.params.id);
    const requestIndex = timeOffRequests.findIndex(req => req.id === requestId);
    if (requestIndex === -1) return res.status(404).send('Time off request not found.');

    timeOffRequests[requestIndex] = {
        ...timeOffRequests[requestIndex],
        date: req.body.date || timeOffRequests[requestIndex].date,
        typeOffRequest: req.body.typeOffRequest || timeOffRequests[requestIndex].typeOffRequest,
        hoursADay: req.body.hoursADay || timeOffRequests[requestIndex].hoursADay
    };
    res.send('This time off request was updated.');
});


// DELETE a time off request by ID
router.delete('/:id', (req, res) => {

    const requestId = parseInt(req.params.id);
    const requestIndex = timeOffRequests.findIndex(req => req.id === requestId);
    if (requestIndex === -1) return res.status(404).send('Time off request not found.');

    timeOffRequests.splice(requestIndex, 1);
    res.send('Time off request deleted.');
});

module.exports = router;

//console.log(timeOffRequestsData);