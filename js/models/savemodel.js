"use strict";

import m from "mithril";
import archiveview from "../views/archiveview";

let authKey = "92e9013bdc3040628b5c8921bae43c2c";
var saveData;
var allData;
var currentSaveID;


let savemodel = {
    currentSaveID: currentSaveID,
    saveData: saveData,
    allData: allData,
    email: "",
    password: "",
    token: "",
    msg: "",
    favorited: false,
    fromDetails: false,

    registerUser: function() {
        m.request({
            url: `https://auth.emilfolino.se/register`,
            body: { email: savemodel.email, password: savemodel.password, api_key: authKey },
            method: 'POST'
        }).then(function (result) {
            // console.log(result);
            savemodel.token = result.data.token;
            savemodel.msg = result.data.message;
            return m.route.set("/account");
        });
    },

    loginUser: function() {
        m.request({
            url: "https://auth.emilfolino.se/login",
            body: { email: savemodel.email, password: savemodel.password, api_key: authKey },
            method: 'POST'
        }).then(function (result) {
            savemodel.token = result.data.token;
            savemodel.msg = result.data.message;
            if (savemodel.fromDetails) {
                savemodel.fromDetails = false;
                m.route.set("/saveview");
            } else {
                m.route.set("/favoriteview");
            }
        });
    },

    addToFav: function(saveDataFav, imgurURL) {
        savemodel.favorited = true;
        // console.log(saveDataFav);
        let data;

        if (imgurURL !== undefined) {
            data = JSON.stringify({
                "searchWordDisp": saveDataFav[0],
                "smithUrl": saveDataFav[1],
                "metUrl": saveDataFav[2],
                "obstrat": saveDataFav[3],
                "smithAuth": saveDataFav[4],
                "smithYear": saveDataFav[5],
                "smithTitle": saveDataFav[6],
                "metAuth": saveDataFav[7],
                "metYear": saveDataFav[8],
                "metTitle": saveDataFav[9],
                "wiviURL": imgurURL
            });
        } else {
            data = JSON.stringify({
                "searchWordDisp": saveDataFav[0],
                "smithUrl": saveDataFav[1],
                "metUrl": saveDataFav[2],
                "obstrat": saveDataFav[3],
                "smithAuth": saveDataFav[4],
                "smithYear": saveDataFav[5],
                "smithTitle": saveDataFav[6],
                "metAuth": saveDataFav[7],
                "metYear": saveDataFav[8],
                "metTitle": saveDataFav[9],
            });
        }

        m.request({
            background: true,
            url: "https://auth.emilfolino.se/data",
            body: {
                artefact: data,
                api_key: authKey
            },
            method: 'POST',
            headers: {
                'x-access-token': savemodel.token,
            }
        }).then(function (result) {
            savemodel.msg = result.data.message;
        });
    },

    addImgToFav: function(imgurURL, saveDataFav) {
        let artefact = JSON.stringify({
            "searchWordDisp": saveDataFav[0],
            "smithUrl": saveDataFav[1],
            "metUrl": saveDataFav[2],
            "obstrat": saveDataFav[3],
            "smithAuth": saveDataFav[4],
            "smithYear": saveDataFav[5],
            "smithTitle": saveDataFav[6],
            "metAuth": saveDataFav[7],
            "metYear": saveDataFav[8],
            "metTitle": saveDataFav[9],
            "wiviURL": imgurURL
        });
        
        console.log(imgurURL);
        m.request({
            url: "https://auth.emilfolino.se/data",
            body: {
                id: savemodel.currentSaveID,
                artefact: artefact,
                api_key: authKey,
            },
            method: 'POST',
            headers: {
                'x-access-token': savemodel.token,
            }
        }).then(function (result) {
            console.log(result);
        });
    },

    getFavs: function() {
        m.request({
            method: "GET",
            url: `https://auth.emilfolino.se/data?api_key=${authKey}`,
            headers: {
                'x-access-token': savemodel.token
            }
        }).then(function (result) {
            savemodel.allData = result;

            // console.log(savemodel.allData);
            return allData;
        });
    },

    getArchive: function() {        //update albumID on build
        // let testAlbumID = "9lzstbO";
        let trueAlbumID = "Mac86rR";
        let imgurClient = "41dec9efbbede41";

        m.request({
            method: "GET",
            url: `https://api.imgur.com/3/album/${trueAlbumID}/images`,
            headers: {
                "Authorization": "Client-ID " + imgurClient,
            }
        })
            .then(function (result) {
                archiveview.imageArray = result.data.reverse();
                archiveview.archiveReady = true;
                return result.data;
            });
    }
};

export default savemodel;
