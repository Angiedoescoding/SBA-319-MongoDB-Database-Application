# MongoDB Database Application

This is a small Node.js, Express, and MongoDB server application that manages employees' time-off requests.

## Objectives

<ul>
<li>Create a server application with Node, Express, and MongoDB.</li>
<li>Create a CRUD API using Express and MongoDB.</li>
<li>Create MongoDB indexes.</li>
<li>Use MongoDB indexing to make efficient queries.</li>
<li>Create MongoDB validation rules.</li>
<li>Use MongoDB validation to ensure data consistency.</li>
</ul>

## Features

<ul>
<li>Create, read, update, and delete employees.</li>
<li>Create, read, update, and delete time off requests.</li>
<li>Create, read, update, and delete locations.</li>
<li>MongoDB database integration.</li>
<li>Data validation and error handling.</li>
<li>Sample data population for testing purposes.</li>
</ul>

## Usage

<ol>
<li>Clone this repository.</li>
<li>Install dependencies using `npm install`.</li>
<li>Create a `.env` file with the following content:</li>
    <ul>
        <li>PORT=3000</li>
        <li>ATLAS_URI="your_mongodb_atlas_uri"</li>
    </ul>
<li>Replace `your_mongodb_atlas_uri` with your MongoDB Atlas URI.</li>
<li>Start the server using `node server.js`.</li>
</ol>


## API Routes

### Employees

<ul>
<li>GET /employees: Get all employees.</li>
<li>GET /employees/:id: Get an employee by ID.</li>
<li>POST /employees: Create a new employee.</li>
<li>PUT /employees/:id: Update an employee by ID.</li>
<li>DELETE /employees/:id: Delete an employee by ID.</li>
</ul>

### Time Off Requests
<ul>
<li><li>GET /time-off-requests: Get all time off requests.</li>
<li>GET /time-off-requests/:id: Get a time off request by ID.</li>
<li>POST /time-off-requests: Create a new time off request.</li>
<li>PUT /time-off-requests/:id: Update a time off request by ID.</li>
<li>DELETE /time-off-requests/:id: Delete a time off request by ID.</li>
</ul>

### Locations
<ul>
<li>GET /locations: Get all locations.</li>
<li>GET /locations/:id: Get a location by ID.</li>
<li>POST /locations: Create a new location.</li>
<li>PUT /locations/:id: Update a location by ID.</li>
<li>DELETE /locations/:id: Delete a location by ID.</li>
</ul>

## Data Validation

![Image](MongoDB-SBA-319-Validation.jpg)
