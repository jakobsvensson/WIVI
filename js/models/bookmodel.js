"use strict";

import m from "mithril";
import top1k from "../../src/top1k";

let apiKey = "AIzaSyAF-fesiUHCSXPVNSoEbePb41_NyfxyQ6s";
let currentBookList = [];
let currentBookImages = []; //image-URLS
let currentWords = [];      //5 random words from API

let runEmergencyBooks = function() {
    currentBookList = [];
    currentBookImages = [];
    let number = Math.floor(Math.random() * 1000);

    getBookshelf(top1k.topwords[number]);
};

let getBookshelf = function(word) {
    currentBookList.length = 0;

    m.request({
        method: "GET",  //get book titles, filtered for 'fiction'
        url: `https://www.googleapis.com/books/v1/volumes?q=${word}\
+subject:fiction&langRestrict=en&key=${apiKey}`,
    })
        .then(function (result) {
            if (result == undefined) {
                runEmergencyBooks();
                return;
            }
            for (let i = 0; i < 5 && i < result.items.length; i++) {
                if (result.totalItems < 3) { //if too few book found, use emergency word
                    currentBookList.length = 0;
                    currentBookImages.length = 0;
                    let number = Math.floor(Math.random() * 1000);

                    getBookshelf(top1k.topwords[number]);
                    console.log(top1k.topwords[number]);
                    break;
                }

                currentBookList.push(result.items[i].volumeInfo.title);
                try {
                    currentBookImages.push(result.items[i].volumeInfo.imageLinks.thumbnail);
                } catch (TypeError) {
                    console.log(TypeError);
                }
            }
            m.redraw();
        });
};

let getRandomWord = function() {
    currentWords.length = 0;

    for (let i = 0; i < 5; i++) {  //local dictionary instead, this request can be removed
        let number = Math.floor(Math.random() * 1000);

        currentWords.push(top1k.topwords[number]);
    }
    // m.request({
    //     method: "GET",
    //     url: `https://random-word-api.herokuapp.com/word?number=5`,
    // })
    //     .then(function () {
    //         currentWords.length = 0;

    //         for (let i = 0; i < 5; i++) {  //local dictionary instead, this request can be removed
    //             let number = Math.floor(Math.random() * 1000);

    //             currentWords.push(top1k.topwords[number]);
    //         }
    //         // for (let i = 0; i < result.length; i++) {
    //         //     currentWords.push(result[i]);
    //         // }
    //     });
};



let bookmodel = {
    getBookshelf: getBookshelf,
    getRandomWord: getRandomWord,
    currentBookList: currentBookList,
    currentWords: currentWords,
};

export default bookmodel;
