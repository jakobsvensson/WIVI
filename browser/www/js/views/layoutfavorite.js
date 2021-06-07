"use strict";

import m from "mithril";

let layoutFavorite = {
    view: function (vnode) {
        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-home", { href: "#!/" }),
            ]),
            m("div.topbar"),
            m("img.logo", { src: "../../src/WIVIwhite-02.png" }),
            m("main.container", vnode.children)
        ];
    }
};

export default layoutFavorite;
