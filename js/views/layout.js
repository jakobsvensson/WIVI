"use strict";

import m from "mithril";

let layout = {
    view: function (vnode) {
        return [
            m("nav.top-nav", [
                m("a.nav-home fas fa-house-user", { href: "#!/frontpage" }),
            ]),
            m("div.topbar"),
            m("a.logo", { href: "#!/frontpage" }),
            m("main.container", vnode.children)
        ];
    }
};

export default layout;
