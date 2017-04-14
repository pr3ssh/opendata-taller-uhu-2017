/*
 * Codebase from Daniel Shiffman
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/challenges/CC_57_Earthquake_Viz/sketch.js
 *
 * DATA from https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php
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


function setup() {
    createCanvas(ww, hh);
    background(20, 20, 20);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapimg, 0, 0);
}


function draw() {}
