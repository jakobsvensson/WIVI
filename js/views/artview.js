"use strict";

import m from "mithril";
import artmodel from "../models/artmodel";
import savemodel from "../models/savemodel";
import oblique from "../../src/obst";

let searchWords;
var metUrl;
var smithUrl;

var metAuthor;
var metYear;
var metTitle;
var smithAuthor;
var smithYear;
var smithTitle;

let renderArt = function (Snumber) {
    var smithImg = new Image;
    var metImg = new Image;

    smithImg.src = artmodel.smithArray[0].objects[Snumber].images[0].b.url;
    metImg.src = artmodel.metArray[0].primaryImageSmall;

    smithUrl = smithImg.src;
    metUrl = metImg.src;
    console.log(Snumber);

    try {
        smithAuthor = artmodel.smithArray[0].objects[Snumber].participants[0].person_name;
    } catch (TypeError) {
        smithAuthor = "Unknown";
    }
    smithYear = artmodel.smithArray[0].objects[Snumber].date;     //get smith data
    smithTitle = artmodel.smithArray[0].objects[Snumber].title;

    metAuthor = artmodel.metArray[0].artistDisplayName;
    metYear = artmodel.metArray[0].objectDate;          //get met data
    metTitle = artmodel.metArray[0].title;


    return [
        m("div.artcontainer", [     //not very elegant fade-in-onload code
            m('img.artObj', {
                src: smithImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

                // ontransitionend(e) {
                //     e.target.style.height = 'auto'
                // },
            }),
            m('img.artObj', {
                src: metImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

                // ontransitionend(e) {
                //     e.target.style.height = 'auto'
                // },
            })
        ])
    ];
};

let renderRandomSmith = function () {
    let smithImg = new Image;
    let metImg = new Image;

    smithImg.src = artmodel.smithArray[0].data.patterns.pattern[0].imageUrl[0];
    metImg.src = artmodel.metArray[0].primaryImageSmall;

    smithUrl = smithImg.src;
    metUrl = metImg.src;

    smithAuthor = artmodel.smithArray[0].data.patterns.pattern[0].userName[0];
    smithYear = artmodel.smithArray[0].data.patterns.pattern[0].dateCreated[0];     //get random
    smithTitle = artmodel.smithArray[0].data.patterns.pattern[0].title[0];

    metAuthor = artmodel.metArray[0].artistDisplayName;
    metYear = artmodel.metArray[0].objectDate;      //get met data
    metTitle = artmodel.metArray[0].title;

    return [
        m("div.artcontainer", [
            m('img.artObj', {
                src: smithImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            }),
            m('img.artObj', {
                src: metImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            })
        ])
    ];
};

let renderRandomMet = function (Snumber) {
    let smithImg = new Image;
    let metImg = new Image;

    smithImg.src = artmodel.smithArray[0].objects[Snumber].images[0].b.url;
    metImg.src = artmodel.metArray[0].data.patterns.pattern[0].imageUrl[0];

    smithUrl = smithImg.src;
    metUrl = metImg.src;

    try {
        smithAuthor = artmodel.smithArray[0].objects[Snumber].participants[0].person_name;
    } catch (TypeError) {
        smithAuthor = "Unknown";
    }
    smithYear = artmodel.smithArray[0].objects[Snumber].date;     //get smith data
    smithTitle = artmodel.smithArray[0].objects[Snumber].title;

    metAuthor = artmodel.metArray[0].data.patterns.pattern[0].userName[0];
    metYear = artmodel.metArray[0].data.patterns.pattern[0].dateCreated[0];     //get random data
    metTitle = artmodel.metArray[0].data.patterns.pattern[0].title[0];

    return [
        m("div.artcontainer", [
            m('img.artObj', {
                src: smithImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            }),
            m('img.artObj', {
                src: metImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            })
        ])
    ];
};

let renderRandomBoth = function () {
    let smithImg = new Image;
    let metImg = new Image;

    smithImg.src = artmodel.smithArray[0].data.patterns.pattern[0].imageUrl[0];
    metImg.src = artmodel.metArray[0].data.patterns.pattern[0].imageUrl[0];

    smithUrl = smithImg.src;
    metUrl = metImg.src;

    metAuthor = artmodel.metArray[0].data.patterns.pattern[0].userName[0];
    metYear = artmodel.metArray[0].data.patterns.pattern[0].dateCreated[0];     //get random
    metTitle = artmodel.metArray[0].data.patterns.pattern[0].title[0];

    smithAuthor = artmodel.smithArray[0].data.patterns.pattern[0].userName[0];
    smithYear = artmodel.smithArray[0].data.patterns.pattern[0].dateCreated[0];     //get random
    smithTitle = artmodel.smithArray[0].data.patterns.pattern[0].title[0];

    return [
        m("div.artcontainer", [
            m('img.artObj', {
                src: smithImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            }),
            m('img.artObj', {
                src: metImg.src,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

            })
        ])
    ];
};

let artview = {
    oninit: function (vnode) {
        searchWords = artmodel.getArt(vnode.attrs.book);
        artmodel.getObstrat();
    },
    view: function () {
        let art;

        // console.log(artmodel.smithArray[0]);
        // console.log(artmodel.metArray[0]);
        if (artmodel.smithArray[0] != undefined && artmodel.metArray[0] != undefined) {
            let searchWordDisp = `${searchWords[1]} ${searchWords[0]}`.toUpperCase();

            if (artmodel.randSmith == true && artmodel.randMet == false) {
                art = renderRandomSmith();
            } else if (artmodel.randMet == true && artmodel.randSmith == false) {
                let Snumber = Math.floor(Math.random() * artmodel.smithArray[0].objects.length);

                art = renderRandomMet(Snumber);
            } else if (artmodel.randSmith == true && artmodel.randSmith == true) {
                art = renderRandomBoth();
            } else {
                let Snumber = Math.floor(Math.random() * artmodel.smithArray[0].objects.length);

                art = renderArt(Snumber);
            }

            if (savemodel.token) {
                let number = Math.floor(Math.random() * oblique.prompts.length);

                return m("div.artcontainer",
                    m("div.prompt", oblique.prompts[number]),
                    m("div.linebreak"),
                    m("div.title", searchWordDisp),
                    m("div.linebreak"),
                    m("div.obst", [
                        m("div.strategy", "STRATEGY"),

                    ], artmodel.obstrat),
                    art,
                    m("div.finishedBtn", {
                        onclick: function(e) {
                            e.redraw = false;
                            let saveData = [searchWordDisp, smithUrl, metUrl, artmodel.obstrat,
                                smithAuthor, smithYear, smithTitle, metAuthor, metYear, metTitle];

                            savemodel.saveData = saveData;
                            // console.log(savemodel.saveData);
                            m.route.set("/saveview");
                        }
                    }, "DONE CREATING?"),
                );
            } else {    //no favorite-icon, not logged in
                let number = Math.floor(Math.random() * oblique.prompts.length);

                return m("div.artcontainer",
                    m("div.prompt", oblique.prompts[number]),
                    m("div.linebreak"),
                    m("div.title", searchWordDisp),
                    m("div.linebreak"),
                    m("div.obst", [
                        m("div.strategy", "STRATEGY"),
                    ], artmodel.obstrat),
                    art,
                    m("div.finishedBtn", {
                        onclick: function (e) {
                            e.redraw = false;
                            let saveData = [searchWordDisp, smithUrl, metUrl, artmodel.obstrat,
                                smithAuthor, smithYear, smithTitle, metAuthor, metYear, metTitle];

                            savemodel.saveData = saveData;
                            // console.log(savemodel.saveData);
                            m.route.set("/saveview");
                        }
                    }, "DONE CREATING?"),
                );
            }
        }
        return m("div.message", "Loading images...");
    }
};

export default artview;
