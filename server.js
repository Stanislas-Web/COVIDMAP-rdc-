// PACKAGES IMPORTATION
const express = require('express');
const Datastore = require('nedb')
const app = express();
const user_db = new Datastore('user_coords.db')

///////////////////////////////////////
// BASIC CONFIGURATIONS
app.listen(3000, () => console.log(`Server started listening at 3000`));
app.use(express.static('static_files'));
app.use(express.json({
        limit: '1mb'
    }))
    //////////////////////////////////////
    // CLIENT - SERVER INTERACTION SIDE
user_db.loadDatabase();
app.post("/user_geo_coords", (request, response) => {
    const response_data = request.body;
    console.log(response_data);
    user_db.insert(response_data)

})