"use strict";

import m from "mithril";

let layout = {
    view: function (vnode) {
        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-undo-alt", { href: "#!/" }),
            ]),
            m("div.topbar"),
            m("img.logo"),
            m("main.container", vnode.children)
        ];
    }
};

export default layout;
