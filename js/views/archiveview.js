"use strict";

import m from "mithril";
import savemodel from "../models/savemodel";
import blacklist from "../../src/blacklist";

// let imgurClient = "41dec9efbbede41";
// let imgurClientSecret = "f89953e5c719d0bea4ce88c21ab96f34285a856e";
// let albumDelete = "m9kKnmYAEY7mgxX";
// let albumID = "Gp3i1ef";
    let minImg = 0;
    let maxImg = 2;


let archiveview = {
    archiveReady: false,
    imageArray: {},

    oninit: function() {
        archiveview.archiveReady = false;
        archiveview.imageArray = savemodel.getArchive();

        // console.log(archiveview.imageArray);
    },
    view: function() {
        if (archiveview.archiveReady) {
            let currentPage = archiveview.imageArray.slice(minImg, maxImg);

            return [
                m("div.title", "WIVI ARCHIVE"),
                m("div.intro", `Here are past WIVIs stored to provide inspiration 
                for future viewers.`),
                m("div.archiveContainer", [
                    currentPage.map(function (data) {
                        // console.log(data);
                        if (!(blacklist.blackIDs.includes(data.id))) {  //check if in blacklist
                            return m("div.archiveObject", [
                                m("div.archiveTitle", data.title),
                                m("img.archiveImg", { src: data.link })
                            ]);
                        }
                    })
                ]),
                (maxImg != archiveview.imageArray.length) ? m("div.finishedBtn", {
                    onclick: function() {
                        minImg += 2;
                        maxImg += 2;
                        currentPage = archiveview.imageArray.slice(minImg, maxImg);
                    }
                }, "NEXT PAGE"): null,
                (minImg != 0) ? m("div.finishedBtn", {
                    onclick: function() {
                        minImg -= 2;
                        maxImg -= 2;
                        currentPage = archiveview.imageArray.slice(minImg, maxImg);
                    }
                }, "PREVIOUS PAGE"): null
            ];
        }
        return [
            m("div.title", "WIVI ARCHIVE"),
            m("div.intro", "Loading archive..."),
        ];
    }
};

export default archiveview;
