"use strict";

import m from "mithril";
import savemodel from "../models/savemodel";

// let trueAlbumID = "ahsYNWa";
let trueAlbumDelete = "cYWf40e2C8WOWkO";    //also in savemodel-getarchive

let imgurClient = "41dec9efbbede41";
// let imgurClientSecret = "f89953e5c719d0bea4ce88c21ab96f34285a856e";
// let albumDelete = "DUTJT8M2WGmOHQ2";
// let albumID = "9lzstbO"

function addToAlbum(hash) {
    let body = new FormData();

    body.append("deletehashes[]", hash);

    m.request({
        method: "POST",
        url: `https://api.imgur.com/3/album/${trueAlbumDelete}/add`,
        body: body,
        headers: {
            "Authorization": "Client-ID " + imgurClient,
        }
    })
        .then(function (result) {
            console.log(result);
        });
}

function upload(e) {
    var file = e.target.files[0];
    let body = new FormData();

    body.append("image", file);
    body.append("title", savemodel.saveData[0]);
    body.append("description", savemodel.saveData[3]);

    m.request({
        method: "POST",
        url: "https://api.imgur.com/3/image",
        body: body,
        headers: {
            "Authorization": "Client-ID " + imgurClient,
        }
    })
        .then(function (result) {
            // console.log(result);
            addToAlbum(result.data.deletehash);
            if (savemodel.token) {
                if (savemodel.favorited == false) {
                    savemodel.addToFav(savemodel.saveData, result.data.link);
                } else {
                    savemodel.addImgToFav(result.data.link, savemodel.saveData); //add imgur link to fav
                }
            }
            m.redraw();
            m.route.set("/prearchiveview/:url", { url: result.data.link });
        })
        .catch(function (e) {
            console.log(e);
            m.route.set("/uploaderror");
        });
}

let cameraview = {
    // oninit: function() {
    // },
    view: function() {
        return [
            m("div.title", "UPLOAD"),
            m("div.intro", "Choose an image to be anonymously uploaded to the WIVI Archive."),
            m("input[type=file]", { onchange: upload })

        ];
    }
};

export default cameraview;
