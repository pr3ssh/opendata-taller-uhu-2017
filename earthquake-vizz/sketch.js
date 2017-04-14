/*
 * Codebase from Daniel Shiffman
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/challenges/CC_57_Earthquake_Viz/sketch.js
 *
 * DATA from https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php
 *
 * MAP DATA PROJECTION on https://en.wikipedia.org/wiki/Web_Mercator
 *
 */

var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 1;

var earthquakes;


function preload() {
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
        clat + ',' + clon + ',' + zoom + '/' +
        ww + 'x' + hh +
        '?access_token=pk.eyJ1IjoiZWRpcG90cmVib2wiLCJhIjoid25OZHV1OCJ9.C4l-Uqhel8nrTRvY3cUY2w');
    earthquakes = loadStrings('data/all_month.csv');
}


function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
}

function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
}


function setup() {
    createCanvas(ww, hh);
    background(20, 20, 20);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapimg, 0, 0);

    var cx = mercX(clon);
    var cy = mercY(clat);

    for (var i = 1; i < earthquakes.length; i++) {
	var data = earthquakes[i].split(/,/);
	var lat = data[1];
	var lon = data[2];
	var x = mercX(lon) - cx;
	var y = mercY(lat) - cy;
	var d = 2; 
        noStroke();
	fill(255, 0, 255, 200);
	ellipse(x, y, d, d);
    }
}


function draw() {}
