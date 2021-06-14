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
                m('a.logo', { href: "#!/frontpage" }),
                m("main.container", vnode.children)
            ];
        }

        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-user-circle", { href: "#!/account" }),
            ]),
            m("div.topbar"),
            m('a.logo', { href: "#!/frontpage" }),
            m("main.container", vnode.children)
        ];
    }
};

export default layoutFront;
