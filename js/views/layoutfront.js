"use strict";

import m from "mithril";
import savemodel from "../models/savemodel";

let layoutFront = {
    view: function (vnode) {
        if (savemodel.token) {
            return [
                m("nav.top-nav", [
                    m("a.nav-home fas fa-user-circle", { href: "#!/favoriteview" }),
                ]),
                m("div.topbar"),
                m('img.logo', {
                    src: "src/WIVIwhite-02.png",

                    style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,
                    onload(e) {
                        e.target.style.cssText += `
                        opacity: 1;
                    `;
                        e.redraw = true;
                    },
                }),
                m("main.container", vnode.children)
            ];
        }

        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-user-circle", { href: "#!/account" }),
            ]),
            m("div.topbar"),
            m('img.logo', {


                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,
                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = true;
                },
            }),
            m("main.container", vnode.children)
        ];
    }
};

export default layoutFront;
