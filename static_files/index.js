// Map related stuff
const attribution = "&copy; <a href='https://www.openstreetmap.org/copyright'> Open Street Map </a> Contributors";
const tile_formater = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mymap = L.map('my_map').setView([-4.322447, 15.307045], 13);
const tiles = L.tileLayer(tile_formater, {
    attribution
});

// ADDING COMPONENTES TO THE MAP (CIRCLES, MARKERS TEC...)
const circle0 = L.circle([-4.34169, 15.296555], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200,
}).addTo(mymap);
circle0.bindPopup('<b>Hôpital du Cinquantenaire,</b> prend en charge <b>+7</b> cas comfirmer  ');
const circle1 = L.circle([-4.403702, 15.37417], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150,
}).addTo(mymap);
circle1.bindPopup('Hopital Sino-congolais,  1 cas comfirmer est prie en charge');
tiles.addTo(mymap);
///////////////////////////////////////////////////
// MOST INFECTED ZONE
const gombe = L.circle([-4.311077, 15.296235], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2500,
}).addTo(mymap);
gombe.bindPopup('<b>La commune de la <b>GOMBE</b> est jusque-là la</b> zone la plus  <b>ateinte</b>');
////////////////////////////////////////////////
const kitambo = L.circle([-4.343027, 15.266681], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1200,
}).addTo(mymap);
kitambo.bindPopup('<b>La commune de <b>KITAMBO</b> est jusque-là la</b> 2eme zone la plus  <b>ateinte</b>');
////////////////////////////////////////
const kinshasa = L.circle([-4.323807, 15.310489], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000,
}).addTo(mymap);
kinshasa.bindPopup('<b>La commune de <b>KINSHASA</b> est jusque-là la</b> 3eme zone la plus  <b>ateinte</b>');

// ADDING USERS COURENT LOCATION

navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const data = {
        lat,
        long
    };
    // const json_setup = {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify(data)
    // }
    // fetch("/user_geo_coords", json_setup)
});