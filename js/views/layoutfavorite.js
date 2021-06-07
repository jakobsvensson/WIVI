"use strict";

import m from "mithril";

let layoutFavorite = {
    view: function (vnode) {
        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-undo-alt", { href: "#!/" }),
            ]),
            m("div.topbar"),
            m("div.logo"),
            m("main.container", vnode.children)
        ];
    }
};

export default layoutFavorite;
