"use strict";

import m from "mithril";
import oblique from "../../src/obst.js";

// let smithApi_key = "9ae4eb33625dd7715decd18150823461";
let smithAuthToken = "d3a2cd1e4fb11f8d845a5f6eff6c697e";
let smithArray = [];
let metArray = [];
let randSmith;  //keep track if image was random due to no search findings
let randMet;
let obstrat;

let getObstrat = function() {
    let number = Math.floor(Math.random() * oblique.strategies.length);

    artmodel.obstrat = oblique.strategies[number];
    return obstrat;
};

let getArt = function(searchTerms) {
    artmodel.randSmith = false;
    artmodel.randMet = false;
    let searchWordList = searchTerms.split("-");

    getSmithsonian(searchWordList[0]);    //get exhibit object with data
    getMet(searchWordList[1]);
    return searchWordList;
};

let getRandomSmith = function() {
    let url = encodeURIComponent("http://www.colourlovers.com/api/patterns/random");

    m.request({
        method: "GET",
        url: `https://xml-proxy.emilfolino.se/${url}`,
    })
        .then(function (result) {
            artmodel.randSmith = true;
            artmodel.smithArray.push(result);
            return result;
        });
};
let getRandomMet = function() {
    let url = encodeURIComponent("http://www.colourlovers.com/api/patterns/random");

    m.request({
        method: "GET",
        url: `https://xml-proxy.emilfolino.se/${url}`,
    })
        .then(function (result) {
            artmodel.randMet = true;
            artmodel.metArray.push(result);
            return result;
        });
};

let getSmithsonian = function(searchWord) {
    m.request({
        method: "GET",
        url: `https://api.collection.cooperhewitt.org/rest/?\
method=cooperhewitt.search.objects&access_token=\
${smithAuthToken}&query=${searchWord}&has_images=true`,
    })
        .then(function (result) {
            artmodel.smithArray.length = 0; //reset
            if (result.objects.length == 0) {
                getRandomSmith();
                return;
            }
            artmodel.smithArray.push(result);
            return result;
        });
};

let getMet = function (searchWord) {
    m.request({
        method: "GET",
        url: `https://collectionapi.metmuseum.org\
/public/collection/v1/search?hasImages=true&q=${searchWord}`,
    })
        .then(function (result) {
            artmodel.metArray.length = 0;   //reset
            if (result.total == 0) {
                getRandomMet();
                return;
            }
            let number = Math.floor(Math.random() * result.objectIDs.length);

            return getMetImg(result.objectIDs[number]);
        });
};

let getMetImg = function(objectID) {
    m.request({
        method: "GET",
        url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    })
        .then(function (result) {
            artmodel.metArray.push(result);
            return result;
        });
};

let artmodel = {
    randSmith: randSmith,
    randMet: randMet,
    smithArray: smithArray,
    metArray: metArray,
    obstrat: obstrat,
    getObstrat: getObstrat,
    getArt: getArt,
};

export default artmodel;
