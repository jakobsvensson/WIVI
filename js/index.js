"use strict";

import m from "mithril";
import Layout from "./views/layout";
import frontpage from "./views/frontpage";
import bookview from "./views/bookview";
import wordview from "./views/wordview";
import artview from "./views/artview";
import layoutFront from "./views/layoutfront";
import account from "./views/accountview";
import newuser from "./views/newuser";
import login from "./views/login";
import saveview from "./views/saveview";
import layoutFavorite from "./views/layoutfavorite";
import favoriteview from "./views/favoriteview";
import cameraview from "./views/cameraview";
import archiveview from "./views/archiveview";
import prearchiveview from "./views/prearchiveview";
import uploaderror from "./views/uploaderror";
import savemodel from "./models/savemodel";
import splash from "./views/splash";

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    m.route(document.body, "/", {
        "/": {
            render: function () {
                savemodel.favorited = false;
                return m(splash);
            }
        },
        "/frontpage": {
            render: function () {
                savemodel.favorited = false;
                return m(layoutFront, m(frontpage));
            }
        },
        "/bookview:word": {
            render: function (vnode) {
                return m(Layout, m(bookview, vnode.attrs));
            }
        },
        "/artview:book": {
            render: function (vnode) {
                return m(Layout, m(artview, vnode.attrs));
            }
        },
        "/wordview": {
            render: function () {
                return m(Layout, m(wordview));
            }
        },
        "/saveview": {
            render: function () {
                return m(Layout, m(saveview));
            }
        },
        "/newuser": {
            render: function () {
                return m(layoutFavorite, m(newuser));
            }
        },
        "/account": {
            render: function () {
                return m(layoutFavorite, m(account));
            }
        },
        "/login": {
            render: function () {
                return m(layoutFavorite, m(login));
            }
        },
        "/favoriteview": {
            render: function () {
                return m(layoutFavorite, m(favoriteview));
            }
        },
        "/cameraview": {
            render: function () {
                return m(layoutFavorite, m(cameraview));
            }
        },
        "/uploaderror": {
            render: function () {
                return m(layoutFavorite, m(uploaderror));
            }
        },
        "/archiveview": {
            render: function () {
                return m(layoutFavorite, m(archiveview));
            }
        },
        "/prearchiveview/:url": {
            render: function (vnode) {
                return m(layoutFavorite, m(prearchiveview, vnode.attrs));
            }
        },
    });
}
