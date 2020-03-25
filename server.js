// PACKAGES IMPORTATION
const express = require('express');
const Datastore = require('nedb')
const app = express();
const user_db = new Datastore('user_coords.db')

///////////////////////////////////////
// BASIC CONFIGURATIONS
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started listening at ${port}`));
app.use(express.static('static_files'));
app.use(express.json({
        limit: '1mb'
    }))
    ////////////////////////////////////
    //CLIENT - SERVER INTERACTION SIDE
user_db.loadDatabase();
app.post("/user_geo_coords", (request, response) => {
    const response_data = request.body;
    console.log(response_data);
    user_db.insert(response_data)

})